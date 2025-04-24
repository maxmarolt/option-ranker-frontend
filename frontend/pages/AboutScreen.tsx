import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, View, Pressable } from 'react-native';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <View style={styles.section}>
      <Pressable onPress={() => setExpanded(!expanded)} style={styles.sectionHeader}>
        <Text style={styles.heading}>{title}</Text>
        <Text style={styles.expandIcon}>{expanded ? '▲' : '▼'}</Text>
      </Pressable>
      {expanded && <View style={styles.sectionContent}>{children}</View>}
    </View>
  );
};

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Section title="🚀 Welcome to Icarus">
        <Text style={styles.paragraph}>
          In Greek mythology, Icarus flew too close to the sun and fell — not because he dreamed too big, but because he flew with
          <Text style={styles.bold}> wax wings</Text>.
        </Text>
        <Text style={styles.paragraph}>
          Most interpret this myth as a warning against ambition. <Text style={styles.bold}>We disagree.</Text>
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.bold}>The real lesson?</Text> You need the right tools to fly.
        </Text>
        <Text style={styles.paragraph}>
          In today’s markets, retail traders are handed wax wings — overly complex, institution-focused data and opaque tools — while institutions fly with titanium jetpacks.
        </Text>
        <Text style={styles.paragraph}>
          🧠 <Text style={styles.bold}>Icarus was created to change that.</Text>
        </Text>
        <Text style={styles.paragraph}>
          This app is designed to make advanced option theory <Text style={styles.bold}>actually usable</Text>. Through visual tools, simplified surfaces, and eventually strategic optimizers, we help ensure that if <Text style={styles.bold}>your price prediction is right</Text>, your return is maximized.
        </Text>
      </Section>

      <Section title="📉 What this app does NOT do">
        <Text style={styles.bullet}>- Give financial advice</Text>
        <Text style={styles.bullet}>- Predict which stocks will go up or down</Text>
        <Text style={styles.bullet}>- Guarantee profitable trades</Text>
      </Section>

      <Section title="📈 What this app DOES do">
        <Text style={styles.bullet}>- Helps you find the best options strategy for your specific forecast</Text>
        <Text style={styles.bullet}>- Maximizes your potential return if your prediction is right</Text>
      </Section>

      <Section title="⚠️ Disclaimer">
        <Text style={styles.paragraph}>
          This app is for <Text style={styles.bold}>educational purposes only</Text>. It does not recommend trades, and cannot guarantee results.
          The stock market is volatile and unpredictable — and so is options pricing.
        </Text>
        <Text style={styles.paragraph}>
          Even the “optimal” strategy may shift as market conditions change.
        </Text>
        <Text style={styles.paragraph}>
          Use this app to think clearly, plan intentionally, and stay informed — <Text style={styles.bold}>not to blindly follow it</Text>.
        </Text>
      </Section>

      <Section title="🎯 Our Mission">
        <Text style={styles.paragraph}>
          <Text style={styles.quote}>Power to the players.</Text>
        </Text>
        <Text style={styles.paragraph}>
          We’re not here to make the game easier — just fairer. If your conviction is strong and your analysis is sharp, you should have the tools to trade like a pro.
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
