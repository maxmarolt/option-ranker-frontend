import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper'; // ✅ Add this
import HomeScreen from './pages/HomeScreen';
import CalculatorScreen from './pages/CalculatorScreen';
import AdvancedScreen from './pages/AdvancedScreen';
import AboutScreen from './pages/AboutScreen';
import MathBreakdown from './pages/MathBreakdown';


const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider> {/* ✅ Wrap everything in this */}
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
