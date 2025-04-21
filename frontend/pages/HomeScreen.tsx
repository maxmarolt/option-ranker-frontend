import React from 'react';
import { ScrollView, View, StyleSheet, Image, Dimensions } from 'react-native';
import { Button } from 'react-native-paper';
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
    <ScrollView contentContainerStyle={styles.scrollContent} style={styles.container}>
      <Image
        source={require('../assets/images/Logo2_text.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <View style={{ height: 20 }} />

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
