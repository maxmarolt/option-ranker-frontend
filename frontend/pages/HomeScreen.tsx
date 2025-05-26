import React, { useState, useCallback } from 'react';
import { ScrollView, View, StyleSheet, Image } from 'react-native';
import { Button, Dialog, Portal, Text, TextInput } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { useFocusEffect } from '@react-navigation/native';
import { logBetaEvent } from '../utils/logger';
import { MaterialIcons } from '@expo/vector-icons';

type RootStackParamList = {
  Home: undefined;
  Calculator: undefined;
  Advanced: undefined;
  About: undefined;
  Quiz: undefined;
};

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

function getMarketStatus(): { status: string; color: string; icon: string } {
  const nowUTC = new Date();
  const day = nowUTC.getUTCDay();
  if (day === 0 || day === 6) {
    return { status: 'Market Closed (Weekend)', color: 'red', icon: 'cancel' };
  }

  const amsterdamTime = new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'Europe/Amsterdam',
  }).format(nowUTC);

  const [hourStr, minStr] = amsterdamTime.split(':');
  const hour = parseInt(hourStr, 10);
  const minute = parseInt(minStr, 10);
  const totalMinutes = hour * 60 + minute;

  if (totalMinutes < 930 || totalMinutes >= 1320) {
    return { status: 'Market Closed', color: 'red', icon: 'cancel' };
  } else if (totalMinutes >= 930 && totalMinutes < 960) {
    return { status: 'Market Open – No Options Data', color: 'orange', icon: 'hourglass-empty' };
  } else {
    return { status: 'Market Open – Receiving Options Data', color: '#00ff88', icon: 'casino' };
  }
}


export default function HomeScreen({ navigation }: Props) {
  useFocusEffect(
    useCallback(() => {
      logBetaEvent('Tab Opened', { tab: 'Home' });
    }, [])
  );

  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [feedbackVisible, setFeedbackVisible] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const market = getMarketStatus();

  return (
    <ScrollView contentContainerStyle={styles.scrollContent} style={styles.container}>
      <View style={{ position: 'absolute', top: 20, right: 10, zIndex: 10 }}>
        <Button
          mode="text"
          icon="feedback"
          textColor="#00ff88"
          onPress={() => setFeedbackVisible(true)}
          labelStyle={{ fontSize: 12 }}
        >
          Feedback / Report Bug
        </Button>
      </View>


      <View style={[styles.marketStatusBox, { borderColor: market.color }]}> 
        <MaterialIcons name={market.icon as any} size={20} color={market.color} style={{ marginRight: 8 }} />
        <View>
          <Text style={[styles.marketStatusMain, { color: market.color }]}>
            {market.status.includes('Open') ? 'Market Open' : 'Market Closed'}
          </Text>
          {market.status.includes('Open') && (
            <Text style={styles.marketStatusSub}>
              {market.status.includes('Receiving') ? 'Receiving Options Data' : 'No Options Data'}
            </Text>
          )}
        </View>
      </View>

      <Image
        source={require('../assets/images/Logo2_text.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Button
        icon={({ size, color }) => <MaterialIcons name="flight-takeoff" size={size} color={color} />}
        mode="outlined"
        onPress={() => navigation.navigate('About')}
        style={styles.button}
        textColor="#00ff88"
      >
        New to Icarus?
      </Button>

      <Button
        icon={({ size, color }) => <MaterialIcons name="calculate" size={size} color={color} />}
        mode="outlined"
        onPress={() => setShowDisclaimer(true)}
        style={styles.button}
        textColor="#00ff88"
      >
        Use Calculator
      </Button>

      <Button
        icon={({ size, color }) => <MaterialIcons name="quiz" size={size} color={color} />}
        mode="outlined"
        onPress={() => navigation.navigate('Quiz')}
        style={styles.button}
        textColor="#00ff88"
      >
        Take the Quiz
      </Button>

      <Button
        icon={({ size, color }) => <MaterialIcons name="show-chart" size={size} color={color} />}
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
              This tool is for educational and informational purposes only. It does not constitute financial advice, investment recommendations, or a guarantee of performance. The underlying model is experimental and currently in testing. Options data is sourced from Yahoo Finance and is delayed by 30min, which limits real-time accuracy. Calculator only works during market open hours + delay. Continue only if you agree.
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setShowDisclaimer(false)}>Cancel</Button>
            <Button
              onPress={() => {
                setShowDisclaimer(false);
                navigation.navigate('Calculator');
              }}
            >
              I Understand
            </Button>
          </Dialog.Actions>
        </Dialog>

        <Dialog visible={feedbackVisible} onDismiss={() => setFeedbackVisible(false)}>
          <Dialog.Title>Submit Feedback</Dialog.Title>
          <Dialog.Content>
            <Text>We’d love to hear your thoughts:</Text>
            <TextInput label="Your feedback" multiline value={feedbackText} onChangeText={setFeedbackText} mode="outlined" style={{ marginTop: 10 }} />
            <TextInput label="Can we follow up? Leave your email (optional)" value={userEmail} onChangeText={setUserEmail} mode="outlined" keyboardType="email-address" autoCapitalize="none" style={{ marginTop: 10 }} />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setFeedbackVisible(false)}>Cancel</Button>
            <Button onPress={() => { logBetaEvent('User Feedback Submitted', { feedback: feedbackText, email: userEmail }); setFeedbackVisible(false); setFeedbackText(''); setUserEmail(''); }}>Submit</Button>
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
  marketStatusBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1c1c1e',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 16,
    marginTop: 24,
    marginBottom: 12,
    borderWidth: 1,
  },
  marketStatusText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  marketStatusMain: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  marketStatusSub: {
    fontSize: 11,
    color: '#aaa',
    marginTop: 2,
  },  
});