import React, { useCallback } from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import Quiz from '../components/Quiz_test';
import { useFocusEffect } from '@react-navigation/native';
import { logBetaEvent } from '../utils/logger';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button } from 'react-native-paper';

type RootStackParamList = {
  Calculator: undefined;
  About: undefined;
  Quiz: undefined;
};

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Quiz'>;
};

export default function QuizScreen({ navigation }: Props) {
  useFocusEffect(
    useCallback(() => {
      logBetaEvent('Tab Opened', { tab: 'Quiz' });
    }, [])
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollContent} style={styles.container}>
      {/* Back Button */}
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

      <Text style={styles.title}>Options Quiz</Text>
      <View style={styles.quizContainer}>
        <Quiz />
      </View>
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    paddingTop: 70, // prevent overlap with back button
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00ff88',
    marginBottom: 20,
  },
  quizContainer: {
    width: '100%',
    maxWidth: 600,
  },
});
