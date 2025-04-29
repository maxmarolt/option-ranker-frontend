import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import HomeScreen from './pages/HomeScreen';
import CalculatorScreen from './pages/CalculatorScreen';
import AdvancedScreen from './pages/AdvancedScreen';
import AboutScreen from './pages/AboutScreen';
import MathBreakdown from './pages/MathBreakdown';
import { logBetaEvent } from './utils/logger'; // <-- ADDED

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const betaId = params.get('beta_id');
    if (betaId) {
      localStorage.setItem('beta_id', betaId);
      console.log('Captured beta_id:', betaId); // For local testing only
    }

    logBetaEvent('App Loaded', { test: 'testing logger setup' }); // <-- ADDED
  }, []);

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Calculator" component={CalculatorScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Advanced" component={AdvancedScreen} options={{ headerShown: false }} />
          <Stack.Screen name="About" component={AboutScreen} />
          <Stack.Screen name="MathBreakdown" component={MathBreakdown} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
