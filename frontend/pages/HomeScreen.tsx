import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Image, Dimensions } from 'react-native';
import { Button, Dialog, Portal, Text } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import { logBetaEvent } from '../utils/logger';


type RootStackParamList = {
  Home: undefined;
  Calculator: undefined;
  Advanced: undefined;
  About: undefined;
};

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

export default function HomeScreen({ navigation }: Props) {
  useFocusEffect(
    useCallback(() => {
      logBetaEvent('Tab Opened', { tab: 'Home' });
    }, [])
  );
  
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  return (
    <ScrollView contentContainerStyle={styles.scrollContent} style={styles.container}>
      <Image
        source={require('../assets/images/Logo2_text.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <View style={{ height: 20 }} />

      <Button
        mode="outlined"
        onPress={() => navigation.navigate('About')}
        style={styles.button}
        textColor="#00ff88"
      >
        New to Icarus?
      </Button>

      <Button
        mode="outlined"
        onPress={() => setShowDisclaimer(true)}
        style={styles.button}
        textColor="#00ff88"
      >
        Use Calculator
      </Button>


      <Button
        mode="outlined"
        onPress={() => navigation.navigate('Advanced')}
        style={styles.button}
        textColor="#00ff88"
      >
        Launch Advanced Tools
      </Button>
      <Portal>
      <Dialog visible={showDisclaimer} onDismiss={() => setShowDisclaimer(false)}>
        <Dialog.Title>Disclaimer</Dialog.Title>
        <Dialog.Content>
          <Text>
          This tool is for educational and informational purposes only. It does not constitute financial advice, investment recommendations, or a guarantee of performance. The underlying model is experimental and currently in testing. Options data is sourced from Yahoo Finance and may be delayed by at least 15 minutes, which limits real-time accuracy. Calculator only works during market open hours + delay. Continue only if you agree.
          </Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={() => setShowDisclaimer(false)}>Cancel</Button>
          <Button onPress={() => {
            setShowDisclaimer(false);
            navigation.navigate('Calculator');
          }}>I Understand</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 0,
    paddingHorizontal: 20,
  },
  logo: {
    width: '100%',
    maxWidth: 300,
    height: 400,
    aspectRatio: 3.5,
  },
  button: {
    marginVertical: 10,
    width: 250,
    borderColor: '#00ff88',
    borderWidth: 1,
  },
});
