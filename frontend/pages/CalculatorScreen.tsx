import React, { useState } from 'react';
import {
  View,
  Platform,
  ScrollView,
  StyleSheet,
  Animated,
  Alert,
  ActivityIndicator,
  useWindowDimensions,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { MaterialIcons } from '@expo/vector-icons';
import {
  TextInput,
  Button,
  Switch,
  Card,
  Text,
  Checkbox,
  Provider as PaperProvider,
  DefaultTheme,
} from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { SafeAreaView, StatusBar } from 'react-native';
import { IconButton } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
import { KeyboardAvoidingView,} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import { logBetaEvent } from '../utils/logger';






type RootStackParamList = {
  Calculator: undefined;
  Advanced: undefined;
  MathBreakdown: { option: string; stats: string; mode: string; priceMode: string };
};

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Calculator'>;
};

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#000000',
    text: '#ffffff',
    primary: '#00ff88',
    placeholder: '#00ff88',
  },
};

export default function CalculatorScreen({ navigation }: Props) {
  useFocusEffect(
    useCallback(() => {
      logBetaEvent('Tab Opened', { tab: 'Calculator' });
    }, [])
  );
  
  const [ticker, setTicker] = useState('');
  const [budget, setBudget] = useState('');
  const [targetPrice, setTargetPrice] = useState('');
  const [targetDate, setTargetDate] = useState(new Date());
  const [tempDate, setTempDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [bestOptions, setBestOptions] = useState<any[]>([]);
  const [noProfitableOptions, setNoProfitableOptions] = useState(false);
  const [marketClosedOrNoData, setMarketClosedOrNoData] = useState(false);
  const [useAskPrice, setUseAskPrice] = useState(true);
  const [animValue] = useState(new Animated.Value(1));
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState<'roi' | 'profit'>('roi');
  const [customWarningMessage, setCustomWarningMessage] = useState<string | null>(null);
  const [currentPrice, setCurrentPrice] = useState<number | null>(null);
  const [isPriceLoading, setIsPriceLoading] = useState(false);
  const [stats, setStats] = useState<any>(null);
  const { width } = useWindowDimensions();
  const isWideScreen = Platform.OS === 'web' && width > 768;

  const animateButton = () => {
    Animated.sequence([
      Animated.timing(animValue, {
        toValue: 1.05,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(animValue, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const calculate = async () => {
    animateButton();
    const budgetNum = parseFloat(budget);
    const targetPriceNum = parseFloat(targetPrice);
    if (!budgetNum || !targetPriceNum || !targetDate || !ticker) {
      Alert.alert("Missing Input", "Please fill all fields");
      return;
    }
    // Log the calculator submission event
    logBetaEvent('Calculator Submitted', {
      ticker,
      budget: budgetNum,
      targetPrice: targetPriceNum,
      expiryDate: targetDate.toISOString().split('T')[0]
    });

    const payload = {
      ticker,
      target_price: targetPriceNum,
      target_date: targetDate.toISOString().split('T')[0],
      decision_date: new Date().toISOString().split('T')[0],
      budget: budgetNum,
      price_mode: useAskPrice ? 'ask' : 'mid',
      mode: mode  // ✅ Include this so backend knows whether it's ROI or Profit
    };
    
    setIsLoading(true);
    setMarketClosedOrNoData(false);
    try {
      const response = await fetch(`https://option-ranker-backend-production.up.railway.app/predict-options?mode=${mode}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ticker,
          target_price: targetPriceNum,
          target_date: targetDate.toISOString().split('T')[0],
          decision_date: new Date().toISOString().split('T')[0],
          budget: budgetNum,
          price_mode: useAskPrice ? 'ask' : 'mid'
          // ⛔ no need to include 'mode' here in body anymore
        }),
      });      
      
      const result = await response.json();
      if (result.market_closed_or_no_data) {
        setMarketClosedOrNoData(true);
        setNoProfitableOptions(false);
        setBestOptions([]);
        return;
      }
      
      if (result.no_profitable_options) {
        setNoProfitableOptions(true);
        setBestOptions([]);
        setCustomWarningMessage(result.message || null);
        
        // log failed result
        logBetaEvent('Calculator Submitted', {
          ticker,
          budget: budgetNum,
          targetPrice: targetPriceNum,
          expiryDate: targetDate.toISOString().split('T')[0],
          result: 'No profitable options'
        });
        
      } else {
        setNoProfitableOptions(false);
        setBestOptions(result.results || []);
        setStats(result.stats || null);
        setCustomWarningMessage(null);
      
        // ✅ log successful result — log only the top-ranked option
        const topOption = result.results[0];
      
        logBetaEvent('Calculator Submitted', {
          ticker,
          budget: budgetNum,
          targetPrice: targetPriceNum,
          expiryDate: targetDate.toISOString().split('T')[0],
          result: {
            type: topOption.option_type === 'C' ? 'Call' : 'Put',
            strike: topOption.strike,
            buyPrice: topOption.buy_price,
            contracts: topOption.contracts_affordable,
            totalCost: topOption.total_cost,
            expiration: topOption.expiration,
            predictedReturn: topOption.predicted_return,
            predictedProfit: topOption.predicted_profit
          }
        });
      }
         
      
      // Show IV warning if applicable
      if (result.iv_warning && result.iv_message) {
        Alert.alert("Volatility Warning", result.iv_message);
      }
      
    } catch (err) {
      console.error('Error fetching predictions:', err);
      Alert.alert("Network Error", "Failed to get predictions from backend.");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCurrentPrice = async (symbol: string) => {
    setIsPriceLoading(true);
    try {
      const response = await fetch(`https://option-ranker-backend-production.up.railway.app/current-price?ticker=${symbol}`)
      const json = await response.json();
      if (json?.price) {
        setCurrentPrice(json.price);
      } else {
        setCurrentPrice(null);
      }
    } catch (err) {
      console.error("Error fetching price from backend:", err);
      setCurrentPrice(null);
    } finally {
      setIsPriceLoading(false);
    }
  };  
  

  const renderBadges = (badges: any[]) => (
    <View style={{ marginTop: 10, flexDirection: 'column' }}>
      {badges.map((badge, index) => (
        <View
          key={index}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 6,
          }}
        >
          <MaterialIcons name={badge.icon} size={16} color={badge.color || "#00ff88"} />
          <Text style={{ marginLeft: 4, fontSize: 12, color: '#ccc' }}>{badge.label}</Text>
        </View>
      ))}
    </View>
  );
  

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
  
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={{ flex: 1 }}
        >
          <ScrollView
            style={{ flex: 1, backgroundColor: '#000' }}
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
          >
        <View style={{ position: 'absolute', top: 20, left: 10, zIndex: 10 }}>
        <Button
          mode="text"
          onPress={() => navigation.goBack()}
          textColor="#00ff88"
          labelStyle={{ fontSize: 16 }}
          icon="arrow-left"
          contentStyle={{ flexDirection: 'row-reverse' }}
        >
          Back
        </Button>
      </View>

        <View style={[styles.splitContainer, { flexDirection: isWideScreen ? 'row' : 'column' }]}>
        <View style={[styles.inputSection, !isWideScreen && { marginLeft: 0, alignSelf: 'center' }]}>
                <View
        style={{
            flexDirection: isWideScreen ? 'row' : 'column',
            alignItems: isWideScreen ? 'center' : 'flex-start',
            marginBottom: 20,
        }}
        >
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
        <TextInput
          label="Stock Ticker"
          value={ticker}
          onChangeText={(val) => {
            setTicker(val);
            setCurrentPrice(null);
          }}
          placeholder="e.g. NVDA"
          mode="outlined"
          style={{
            flexGrow: 1,
            minWidth: 120,
            marginRight: 10,
          }}
          autoCapitalize="characters"
          theme={{ colors: theme.colors }}
          contentStyle={{ color: '#00ff88' }}
        />
        <Button
        mode="outlined"
        onPress={() => {
          if (ticker.trim() !== '') {
            fetchCurrentPrice(ticker.toUpperCase());
          } else {
            Alert.alert('Ticker Missing', 'Please enter a stock ticker first.');
          }
        }}
        style={{
          height: 56,
          justifyContent: 'center',
          borderRadius: 28,
          marginTop: 4, // ← small visual alignment tweak
        }}
        contentStyle={{
          height: 56,
          paddingVertical: 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        labelStyle={{ fontSize: 14, color: '#00ff88' }}
        textColor="#00ff88"
      >
        {isPriceLoading
          ? 'Loading...'
          : currentPrice !== null
            ? `Price ($): $${currentPrice.toFixed(2)}`
            : 'Get Price'}
      </Button>



      </View>


        
        </View>


            <TextInput
                label="Your Investment Budget ($)"
                value={budget}
                onChangeText={setBudget}
                placeholder="e.g. 1000"
                keyboardType="numeric"
                mode="outlined"
                style={styles.input}
                theme={{ colors: theme.colors }}
                contentStyle={{ color: '#00ff88' }}
            />

            <TextInput
                label="Target Stock Price ($)"
                value={targetPrice}
                onChangeText={setTargetPrice}
                placeholder="e.g. 150"
                keyboardType="numeric"
                mode="outlined"
                style={styles.input}
                theme={{ colors: theme.colors }}
                contentStyle={{ color: '#00ff88' }}
            />

            {Platform.OS === 'web' ? (
              <View style={{ marginBottom: 20 }}>
                <Text style={{ color: '#ccc', marginBottom: 6, fontSize: 16 }}>
                  Select Target Date:
                </Text>
                <input
                  type="date"
                  value={targetDate.toISOString().split('T')[0]}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (!isNaN(Date.parse(val))) {
                      setTargetDate(new Date(val));
                    }
                  }}
                  style={{
                    padding: 12,
                    backgroundColor: '#000',
                    color: '#ccc',
                    border: '1px solid #00ff88',
                    borderRadius: 8,
                    fontSize: 16,
                    fontFamily: 'sans-serif',
                    cursor: 'pointer',
                  }}
                />
              </View>
            ) : (
              <>
                <TextInput
                  label="Target Date"
                  value={targetDate.toISOString().split('T')[0]}
                  mode="outlined"
                  editable={false}
                  onPressIn={() => setShowPicker(true)}
                  style={styles.input}
                  theme={{ colors: theme.colors }}
                  contentStyle={{ color: '#00ff88' }}
                  right={<TextInput.Icon icon="calendar" color="#00ff88" />}
                />

                {showPicker && (
                  <DateTimePicker
                    value={targetDate}
                    mode="date"
                    display="default"
                    onChange={(_, selectedDate) => {
                      if (selectedDate) setTargetDate(selectedDate);
                      setShowPicker(false);
                    }}
                  />
                )}
              </>
            )}






            <View style={styles.toggleContainer}>
                <Text style={{ color: 'white' }}>Buy at Ask</Text>
                <Switch value={useAskPrice} onValueChange={setUseAskPrice} color="#00ff88" />
                <Text style={{ color: 'white' }}>Strategy: {mode === 'roi' ? 'High ROI (Aggressive)' : 'High Profit (Strategic)'}</Text>
                <Switch
                value={mode === 'roi'}
                onValueChange={() => setMode(mode === 'roi' ? 'profit' : 'roi')}
                color="#00ff88"
              />

            </View>

            {/* ✅ One calculate button only — here at the end */}
            <Animated.View style={{ transform: [{ scale: animValue }] }}>
                <Button
                mode="outlined"
                onPress={calculate}
                style={styles.calculateButtonOutlined}
                icon="chart-line"
                textColor="#00ff88"
                >
                Calculate Best Option
                </Button>
            </Animated.View>

            {isLoading && (
                <View style={{ marginTop: 20, alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#00ff88" />
                <Text style={{ color: '#00ff88', marginTop: 10 }}>Calculating...</Text>
                </View>
            )}
            </View>


          <ScrollView
            style={[styles.resultScroll]}
            contentContainerStyle={[styles.resultScrollContent, !isWideScreen && { paddingLeft: 0, alignItems: 'center' }]}
            showsVerticalScrollIndicator={false}
          >
            {marketClosedOrNoData && (
            <Card style={styles.warningBox}>
                <Card.Content style={{ flexDirection: 'row', alignItems: 'center' }}>
                <MaterialIcons name="schedule" size={24} color="#ffaa00" style={{ marginRight: 8 }} />
                <Text style={{ color: '#ffaa00', fontSize: 16 }}>
                    Options data not available. Market may be closed or Yahoo is not reporting current prices.
                </Text>
                </Card.Content>
            </Card>
            )}

            {!marketClosedOrNoData && noProfitableOptions && (
            <Card style={styles.warningBox}>
                <Card.Content style={{ flexDirection: 'row', alignItems: 'center' }}>
                <MaterialIcons name="warning" size={24} color="#ffaa00" style={{ marginRight: 8 }} />
                <Text style={{ color: '#ffaa00', fontSize: 16 }}>
                    {customWarningMessage || "No profitable options found. Try increasing your budget or adjusting your price/date."}
                </Text>
                </Card.Content>
            </Card>
            )}


            {bestOptions.length > 0 && (
              <View>
                <Text style={styles.resultTitle}>Options ranked by total predicted profit:</Text>
                {bestOptions.map((opt, idx) => (
                  <Card key={idx} style={styles.resultBox}>
                    <Text style={styles.rankNumber}>{`#${idx + 1}`}</Text>
                    <Card.Content>
                      <Text style={styles.optionHeader}>
                        {`${opt.option_type === 'C' || opt.option_type === 'Call' ? 'CALL' : 'PUT'} ${new Date(opt.expiration).toLocaleDateString('en-US', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric',
                        }).toUpperCase()} @ ${opt.strike.toFixed(2)} • ${ticker.toUpperCase()}`}
                      </Text>
                      <Text style={[styles.resultText, { marginTop: 10 }]}>Type: {opt.option_type === "P" ? "Put" : "Call"}</Text>
                      <Text style={styles.resultText}>Strike: {opt.strike}</Text>
                      <Text style={styles.resultText}>Buy Price: {opt.buy_price.toFixed(2)}</Text>
                      <Text style={styles.resultText}>Contracts: {opt.contracts_affordable}</Text>
                      <Text style={styles.resultText}>Total Cost: ${opt.total_cost.toFixed(2)}</Text>
                      <Text style={styles.resultText}>Expiry: {opt.expiration.split('T')[0]}</Text>
                      <Text style={styles.resultText}>Est. Return: {(opt.predicted_return * 100).toFixed(1)}%</Text>
                      {opt.target_too_far && (
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 6 }}>
                          <MaterialIcons name="error-outline" size={16} color="#ff4444" />
                          <Text style={{ marginLeft: 4, fontSize: 12, color: '#ff4444' }}>
                            High risk — prediction exceeds typical implied move range
                          </Text>
                        </View>
                      )}
                      {opt.badges && renderBadges(opt.badges)}

                      <Button
                        mode="text"
                        onPress={() => navigation.navigate('MathBreakdown', {
                          option: JSON.stringify(opt),
                          stats: JSON.stringify(stats),
                          mode: mode,
                          priceMode: useAskPrice ? 'ask' : 'mid'
                        })}
                        textColor="#00ff88"
                        style={{ marginTop: 12 }}
                      >
                        🧮 I want the math
                      </Button>

                    </Card.Content>
                  </Card>
                ))}
              </View>
            )}
          </ScrollView>
        </View>
      </ScrollView>
      </KeyboardAvoidingView>
      </SafeAreaView>
    </PaperProvider>
  );
}

// (unchanged styles remain at the bottom)


const styles = StyleSheet.create({
  splitContainer: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 80,
  },
  inputSection: {
    maxWidth: 480,
    width: '100%',
    alignSelf: 'flex-start',
    marginTop: 20,
  },
  input: {
    marginBottom: 20,
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  calculateButtonOutlined: {
    borderColor: '#00ff88',
    borderWidth: 1.5,
    borderRadius: 12,
    paddingVertical: 12,
    marginBottom: 30,
  },
  resultScroll: {
    flex: 1,
    maxWidth: 700,
  },
  resultScrollContent: {
    paddingLeft: 100,
    paddingRight: 20,
    paddingBottom: 100,
  },
  resultBox: {
    backgroundColor: '#1c1c1e',
    marginBottom: 20,
    borderRadius: 12,
    width: '90%',
    maxWidth: 500,
    alignSelf: 'center',
    padding: 12,
  },
  warningBox: {
    backgroundColor: '#1c1c1e',
    marginBottom: 20,
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    alignSelf: 'center',
    maxWidth: 500,
    width: '90%',
  },
  resultTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  resultText: {
    color: 'white',
    fontSize: 16,
    marginBottom: 4,
  },
  rankNumber: {
    position: 'absolute',
    top: 8,
    right: 12,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#00ff88',
    opacity: 0.2,
  },
  optionHeader: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    textTransform: 'uppercase',
  },
});
