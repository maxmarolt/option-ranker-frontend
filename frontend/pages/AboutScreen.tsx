import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, View, Pressable } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import { logBetaEvent } from '../utils/logger';
import { MaterialIcons } from '@expo/vector-icons';
import type { IconProps } from '@expo/vector-icons/build/createIconSet';

type MaterialIconName = IconProps<any>['name'];

const Section = ({ title, icon, children }: { title: string; icon: MaterialIconName; children: React.ReactNode }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <View style={styles.section}>
      <Pressable onPress={() => setExpanded(!expanded)} style={styles.sectionHeader}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <MaterialIcons name={icon} size={20} color="#00ff88" style={{ marginRight: 8 }} />
          <Text style={styles.heading}>{title}</Text>
        </View>
        <Text style={styles.expandIcon}>{expanded ? '▲' : '▼'}</Text>
      </Pressable>
      {expanded && <View style={styles.sectionContent}>{children}</View>}
    </View>
  );
};

export default function AboutScreen() {
  useFocusEffect(
    useCallback(() => {
      logBetaEvent('Tab Opened', { tab: 'About Icarus' });
    }, [])
  );

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Section title="Welcome to Icarus" icon="flight">
        <Text style={styles.paragraph}>
          In the myth, Icarus and his father Daedalus built wings to escape from Crete. They used feathers and wax. As they took flight, Daedalus warned his son not to fly too high or too low. But Icarus soared upward, toward the sun. The wax melted, and he fell into the sea.
        </Text>
        <Text style={styles.paragraph}>
          Most people say the lesson is simple: don’t be too ambitious.
        </Text>
        <Text style={styles.paragraph}>
          We see it differently.
        </Text>
        <Text style={styles.paragraph}>
          Icarus didn’t fall because he dreamed too big. He fell because he used the wrong materials. The idea wasn’t the problem — the tools were.
        </Text>
        <Text style={styles.paragraph}>
          We’ve been the retail traders flying blind, watching the pros eat while we get fed latency, noise, and guesswork. We didn’t build Icarus to play it safe — we built it to flip the script. Retail doesn’t need a handout. It needs real tools, built by people who actually trade this stuff. Tools that speak your language, reflect your logic, and give you a fair shot at playing the game right.
        </Text>
      </Section>


      <Section title="What this App Does Not Do" icon="block">
        <Text style={styles.bullet}>- Give financial advice</Text>
        <Text style={styles.bullet}>- Predict whether a stock will go up or down</Text>
        <Text style={styles.bullet}>- Guarantee profits or successful trades</Text>
      </Section>

      <Section title="What this App Actually Does" icon="check">
        <Text style={styles.bullet}>- Helps you identify the most efficient option strategy given a price target</Text>
        <Text style={styles.bullet}>- Ranks all contracts by potential return or profit under your forecast</Text>
        <Text style={styles.bullet}>- Makes advanced modeling accessible to retail users</Text>
      </Section>

      <Section title="Disclaimer" icon="warning">
        <Text style={styles.paragraph}>
          This tool is for <Text style={styles.bold}>educational purposes only</Text>. It does not constitute investment advice or recommendations.
        </Text>
        <Text style={styles.paragraph}>
          Options trading involves risk. The model ranks scenarios based on user input and mathematical assumptions, not market predictions.
        </Text>
      </Section>

      <Section title="How the Calculator Works" icon="calculate">
        <Text style={styles.paragraph}>
          This is a simplified summary of the core model. During beta testing, the full implementation details remain proprietary. Upon full public release, we are committed to complete transparency around how the model works and ranks contracts.
        </Text>

        <Text style={styles.paragraph}>
          The core of this app is a scenario-based option ranker. It uses a twist on the classic Black-Scholes formula (the foundation of modern options pricing) to help you find the most efficient option strategy for a specific market view.
        </Text>

        <Text style={styles.paragraph}>
          Normally, Black-Scholes assumes the future is unknown and prices options based on current conditions. But traders often have a specific belief. For example, “this stock will hit $120 by next Friday.” The Icarus model takes that belief and makes it actionable.
        </Text>

        <Text style={styles.paragraph}>
          Instead of using today’s price (S₀) in the formula, the model substitutes your target price (S_target). This turns Black-Scholes into a scenario evaluator. It asks: “If you’re right, what would this option be worth on that date?”
        </Text>

        <Text style={styles.paragraph}>
          Mathematically, the substitution looks like this:
        </Text>
        <Text style={styles.paragraph}>
          C_target = S_target * N(d₁̂) – K * exp(–rT) * N(d₂̂)
        </Text>
        <Text style={styles.paragraph}>
          where d₁̂ and d₂̂ are based on your forecast price and expiration.
        </Text>

        <Text style={styles.paragraph}>
          The model scans every available call or put option, filters out bad data and contracts that don't match your timeframe or budget, and calculates how each would perform in your scenario. It then ranks them by either expected return or profit, depending on your mode.
        </Text>

        <Text style={styles.paragraph}>
          In “ROI” mode, it prioritizes percent gain. In “Profit” mode, it focuses on total dollar payoff. Either way, it picks the contract that gives you the most efficient exposure to your view.
        </Text>

        <Text style={styles.paragraph}>
          This isn't a forecast engine. It doesn't try to predict the market. It assumes you're right, and helps you find the contract that best rewards that accuracy.
        </Text>

        <Text style={styles.paragraph}>
          In extensive backtests using real NVDA data from early 2024, the model outperformed a random contract picker in <Text style={styles.bold}>92.8% of 1000 trials</Text>. It achieved a <Text style={styles.bold}>mean return of +14.43%</Text> versus just <Text style={styles.bold}>+3.17%</Text> for random picks. A t-test confirmed statistical significance with a p-value near zero, and Cohen’s d showed a very large effect size of 1.19.
        </Text>

        <Text style={styles.paragraph}>
          In short: the calculator transforms your belief into a ranked list of the best ways to express it — mathematically, transparently, and without the noise of guesswork or blind browsing.
        </Text>
      </Section>


      <Section title="Our Mission" icon="flag">
        <Text style={styles.paragraph}>
          <Text style={styles.quote}>Power to the players.</Text>
        </Text>
        <Text style={styles.paragraph}>
          If your conviction is strong and your analysis sharp, you deserve access to tools that match institutional grade infrastructure — without the gatekeeping.
        </Text>
        <Text style={styles.boldCenter}>No more wax wings.</Text>
      </Section>

      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  content: {
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  expandIcon: {
    color: 'white',
    fontSize: 18,
  },
  sectionContent: {
    paddingTop: 12,
  },
  heading: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraph: {
    color: 'white',
    fontSize: 16,
    marginBottom: 12,
    lineHeight: 24,
  },
  bullet: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 8,
  },
  bold: {
    fontWeight: 'bold',
    color: 'white',
  },
  boldCenter: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 30,
    fontSize: 18,
  },
  quote: {
    fontStyle: 'italic',
    color: '#ccc',
  },
});
