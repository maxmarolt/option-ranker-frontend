import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Card } from 'react-native-paper';
import { quizQuestions } from '../data/quiz_scenarios';
import { QuizQuestion } from '../types/quiz';

const shuffle = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [shuffledKeys, setShuffledKeys] = useState<('A' | 'B' | 'C')[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [shuffledOrder, setShuffledOrder] = useState<number[]>([]);

  // Initialize shuffled question order and shuffled answers per question
  useEffect(() => {
    if (shuffledOrder.length === 0) {
      const indices = [...Array(quizQuestions.length).keys()];
      setShuffledOrder(shuffle(indices));
    } else {
      setShuffledKeys(shuffle(['A', 'B', 'C']));
      setSelected(null);
    }
  }, [index, shuffledOrder]);

  // Prevent crashing before shuffledOrder is ready
  if (shuffledOrder.length === 0) {
    return null;
  }

  const question: QuizQuestion = quizQuestions[shuffledOrder[index]];

  const handleAnswer = (key: 'A' | 'B' | 'C') => {
    if (!selected) {
      setSelected(key);
    }
  };

  return (
    <View style={styles.container}>
      <Text variant="titleLarge" style={styles.title}>
        {question.event} {question.year ? `(${question.year})` : ''}
      </Text>
      <Text style={styles.setup}>{question.setup}</Text>

      {shuffledKeys.map((key) => {
        const answer = question.answers[key];
        const isSelected = selected === key;
        const isCorrect = answer.correct;

        return (
          <Card
            key={key}
            onPress={() => handleAnswer(key)}
            style={[
              styles.card,
              selected && isSelected && (isCorrect ? styles.correct : styles.incorrect),
            ]}
          >
            <Card.Content>
              <Text style={styles.option}>{answer.text}</Text>
              {isSelected && (
                <View style={{ marginTop: 6 }}>
                  <Text style={{ color: 'white', fontSize: 14 }}>{answer.response}</Text>
                  <Text style={{ color: '#888', fontStyle: 'italic', marginTop: 4 }}>
                    {question.education}
                  </Text>
                </View>
              )}
            </Card.Content>
          </Card>
        );
      })}

      {selected && (
        <Button
          mode="outlined"
          onPress={() => setIndex((prev) => (prev + 1) % shuffledOrder.length)}
          style={styles.nextButton}
          textColor="#00ff88"
        >
          Next Question
        </Button>
      )}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    padding: 16,
    flex: 1,
  },
  title: {
    color: '#00ff88',
    marginBottom: 10,
  },
  setup: {
    color: 'white',
    fontSize: 18,
    marginBottom: 20,
    lineHeight: 26,
  },
  card: {
    backgroundColor: '#1c1c1e',
    marginBottom: 12,
    padding: 10,
    borderRadius: 10,
  },
  correct: {
    borderColor: '#00ff88',
    borderWidth: 2,
  },
  incorrect: {
    borderColor: '#ff4444',
    borderWidth: 2,
  },
  option: {
    fontSize: 16,
    color: 'white',
  },
  nextButton: {
    marginTop: 20,
    borderColor: '#00ff88',
    borderRadius: 10,
    alignSelf: 'center',
  },
});