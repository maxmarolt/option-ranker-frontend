import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Calculator: undefined;
  Advanced: undefined;
};

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🚀 Icarus Options</Text>

      <Button
        mode="outlined"
        onPress={() => navigation.navigate('Calculator')}
        style={styles.button}
        textColor="#00ff88"
      >
        📈 Use Calculator
      </Button>

      <Button
        mode="outlined"
        onPress={() => navigation.navigate('Advanced')}
        style={styles.button}
        textColor="#00ff88"
      >
        🔬 Launch Advanced Tools
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  title: {
    fontSize: 26,
    color: '#00ff88',
    fontWeight: 'bold',
    marginBottom: 40,
  },
  button: {
    marginVertical: 10,
    width: 250,
    borderColor: '#00ff88',
    borderWidth: 1,
  },
});
