import React from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import Quiz from '../components/Quiz_test';

export default function QuizScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent} style={styles.container}>
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
