import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, TextInput } from 'react-native-paper';
import VolSurfaceChart from '../components/charts/VolSurfaceChart';
import { StackNavigationProp } from '@react-navigation/stack';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import { logBetaEvent } from '../utils/logger';


type RootStackParamList = {
  Calculator: undefined;
  Advanced: undefined;
};

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Advanced'>;
};

export default function AdvancedScreen({ navigation }: Props) {
  useFocusEffect(
    useCallback(() => {
      logBetaEvent('Tab Opened', { tab: 'Advanced Tools' });
    }, [])
  );
  
  const [ticker, setTicker] = useState('');
  const [selectedChart, setSelectedChart] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      {/* Back nav */}
      <Button
        mode="text"
        onPress={() => navigation.goBack()}
        style={{ alignSelf: 'flex-start', marginBottom: 10 }}
        textColor="#00ff88"
        >
        ← Back
        </Button>

      {/* Ticker input */}
      <TextInput
        label="Enter Stock Ticker"
        value={ticker}
        onChangeText={(text) => {
            setTicker(text.toUpperCase());
            setSelectedChart(null);
        }}
        placeholder="e.g. AAPL"
        mode="outlined"
        style={{
            marginBottom: 20,
            borderRadius: 12,
            backgroundColor: '#000',
        }}
        theme={{
            colors: {
            primary: '#00ff88',
            text: '#00ff88',
            placeholder: '#888',
            background: '#000',
            surfaceVariant: '#000',
            outline: '#00ff88', // outline color when inactive
            },
        }}
        textColor="#00ff88"
        />



      {/* Chart selection */}
      <Button
        mode="outlined"
        disabled={!ticker}
        onPress={() => setSelectedChart('volsurface')}
        style={styles.chartButton}
        textColor="#00ff88"
      >
        Show Volatility Surface
      </Button>

      {/* Chart area */}
      <View style={styles.chartContainer}>
        {selectedChart === 'volsurface' && ticker && (
          <VolSurfaceChart ticker={ticker} />
        )}
        {!selectedChart && ticker && (
          <Text style={styles.info}>Select a chart type above</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
    paddingTop: 50,
  },
  input: {
    backgroundColor: 'black',
    marginBottom: 20,
    borderColor: '#00ff88',
    borderWidth: 1,
  },
  chartButton: {
    borderColor: '#00ff88',
    marginBottom: 20,
  },
  chartContainer: {
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: '#333',
    paddingTop: 10,
  },
  info: {
    color: '#ccc',
    textAlign: 'center',
    marginTop: 10,
  },
});
