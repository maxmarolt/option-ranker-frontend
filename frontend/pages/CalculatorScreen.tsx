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

type RootStackParamList = {
  Calculator: undefined;
  Advanced: undefined;
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
  const [disclaimerChecked, setDisclaimerChecked] = useState(false);
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
    if (!disclaimerChecked) {
      Alert.alert("Disclaimer Required", "You must confirm that you've read the disclaimer before continuing.");
      return;
    }
    const budgetNum = parseFloat(budget);
    const targetPriceNum = parseFloat(targetPrice);
    if (!budgetNum || !targetPriceNum || !targetDate || !ticker) {
      Alert.alert("Missing Input", "Please fill all fields");
      return;
    }
    const requestBody = {
      ticker,
      target_price: targetPriceNum,
      target_date: targetDate.toISOString().split('T')[0],
      decision_date: new Date().toISOString().split('T')[0],
      budget: budgetNum,
      price_mode: useAskPrice ? 'ask' : 'mid',
    };
    setIsLoading(true);
    setMarketClosedOrNoData(false);
    try {
      const response = await fetch(`https://option-ranker-backend-production.up.railway.app/predict-options`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      });
      const result = await response.json();
      if (result.market_closed_or_no_data) {
        setMarketClosedOrNoData(true);
        setNoProfitableOptions(false);
        setBestOptions([]);
        return;
      }
      if (result.message) {
        Alert.alert("Notice", result.message);
        setBestOptions([]);
        setNoProfitableOptions(false);
      } else {
        setNoProfitableOptions(!!result.no_profitable_options);
        setBestOptions(result.results || []);
      }
    } catch (err) {
      console.error('Error fetching predictions:', err);
      Alert.alert("Network Error", "Failed to get predictions from backend.");
    } finally {
      setIsLoading(false);
    }
  };

  const renderBadges = (badges: any[]) => (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 10 }}>
      {badges.map((badge, index) => (
        <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10, marginBottom: 6 }}>
          <MaterialIcons name={badge.icon} size={16} color={badge.color || "#00ff88"} />
          <Text style={{ marginLeft: 4, fontSize: 12, color: '#ccc' }}>{badge.label}</Text>
        </View>
      ))}
    </View>
  );

  return (
    <PaperProvider theme={theme}>
      <ScrollView style={{ flex: 1, backgroundColor: '#000' }} contentContainerStyle={{ flexGrow: 1 }}>
        <View style={[styles.splitContainer, { flexDirection: isWideScreen ? 'row' : 'column' }]}>
        <View style={[styles.inputSection, !isWideScreen && { marginLeft: 0, alignSelf: 'center' }]}>
            <TextInput
                label="Stock Ticker"
                value={ticker}
                onChangeText={setTicker}
                placeholder="e.g. NVDA"
                mode="outlined"
                style={styles.input}
                autoCapitalize="characters"
                theme={{ colors: theme.colors }}
                contentStyle={{ color: '#00ff88' }}
            />

            <TextInput
                label="Your Investment Budget (€)"
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
                label="Target Stock Price (€)"
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
                    marginBottom: 20,
                    backgroundColor: '#000',
                    color: '#00ff88',
                    border: '1px solid #00ff88',
                    borderRadius: 8,
                    fontSize: 16,
                    fontFamily: 'sans-serif',
                    marginTop: 10,
                }}
                />
            ) : null}

            <View style={styles.toggleContainer}>
                <Text style={{ color: 'white' }}>Buy at Ask</Text>
                <Switch value={useAskPrice} onValueChange={setUseAskPrice} color="#00ff88" />
            </View>

            {/* Disclaimer Card */}
            <Card style={styles.warningBox}>
                <Card.Content>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                    <MaterialIcons name="warning" size={24} color="#ffaa00" style={{ marginRight: 8 }} />
                    <Text style={{ color: '#ffaa00', fontSize: 18, fontWeight: 'bold' }}>Disclaimer</Text>
                </View>
                <Text style={{ color: '#ccc', marginBottom: 10 }}>
                This tool is for educational and informational purposes only. It does not constitute financial advice, investment recommendations, or a guarantee of performance. The underlying model is experimental and currently in testing. Options data is sourced from Yahoo Finance and may be delayed by at least 15 minutes, which limits real-time accuracy. Model performance may drop significantly for short-term options or highly volatile stocks. Always do your own research and consult a licensed financial advisor before making investment decisions.    Calculator only works during market open hours + delay.
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Checkbox.Android
                    status={disclaimerChecked ? 'checked' : 'unchecked'}
                    onPress={() => setDisclaimerChecked(!disclaimerChecked)}
                    color="#00ff88"
                    />
                    <Text style={{ color: 'white' }}>I have read and understand the disclaimer.</Text>
                </View>
                </Card.Content>
            </Card>

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
                    No profitable options found. Try increasing your budget or adjusting your price/date.
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
                      <Text style={styles.resultText}>Total Cost: €{opt.total_cost.toFixed(2)}</Text>
                      <Text style={styles.resultText}>Expiry: {opt.expiration.split('T')[0]}</Text>
                      <Text style={styles.resultText}>Est. Return: {(opt.predicted_return * 100).toFixed(1)}%</Text>
                      {opt.badges && renderBadges(opt.badges)}
                    </Card.Content>
                  </Card>
                ))}
              </View>
            )}
          </ScrollView>
        </View>
      </ScrollView>
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
