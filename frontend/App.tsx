import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './pages/HomeScreen';
import CalculatorScreen from './pages/CalculatorScreen';
import AdvancedScreen from './pages/AdvancedScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Calculator" component={CalculatorScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Advanced" component={AdvancedScreen} options={{ headerShown: false }} />
        </Stack.Navigator>

    </NavigationContainer>
  );
}
