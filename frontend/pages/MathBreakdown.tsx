import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';


export default function MathBreakdown() {
    const route = useRoute();
    const { option, stats, mode, priceMode } = route.params as {
    option: string;
    stats: string;
    mode: string;
    priceMode: string;
    };

    const parsed = JSON.parse(option);
    const statsParsed = JSON.parse(stats);
    

  const {
    option_type,
    strike,
    buy_price,
    contracts_affordable,
    total_cost,
    predicted_return,
    bs_estimated_value,
    implied_volatility,
    bs_target_price,
    T,
  } = parsed;

  const S = bs_target_price; // Your predicted price
  const K = strike;
  const sigma = implied_volatility;
  const r = 0.05;

  const valid = S && K && sigma && T;

  let d1 = 0;
  let d2 = 0;
  if (valid) {
    d1 = (Math.log(S / K) + (r + 0.5 * sigma ** 2) * T) / (sigma * Math.sqrt(T));
    d2 = d1 - sigma * Math.sqrt(T);
  }

  const expected_value = bs_estimated_value && contracts_affordable
    ? bs_estimated_value * contracts_affordable * 100
    : 0;

  const roi = total_cost ? ((expected_value - total_cost) / total_cost) * 100 : 0;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🧠 Math Breakdown</Text>

      <Text style={styles.section}>What This Means</Text>
      <Text style={styles.row}>
        You predicted the stock will be worth ${S.toFixed(2)} by your target date.
        Based on this, we used the Black-Scholes model to estimate the value of each option.
        This contract was selected because it offers a strong balance of cost, volatility, and payoff.
      </Text>
      <Text style={styles.section}>📊 How We Picked This</Text>

        <Text style={styles.row}>
        We found {statsParsed.total_contracts_available} total option contracts for this ticker.
        </Text>

        <Text style={styles.row}>
        {statsParsed.total_contracts_available - statsParsed.contracts_after_prediction_filter} were removed because they didn’t match your price or expiry prediction — leaving {statsParsed.contracts_after_prediction_filter}.
        </Text>

        <Text style={styles.row}>
        Of those, {statsParsed.contracts_after_prediction_filter - statsParsed.contracts_considered_final} were filtered out due to:
        </Text>
        <Text style={styles.row}>• Contracts priced above your budget</Text>
        <Text style={styles.row}>• Extreme implied volatility (IV &gt; 300% or &lt; 1%), which distorts valuation</Text>
        <Text style={styles.row}>• Missing bid/ask prices — usually a sign of low liquidity or no recent trading</Text>


        <Text style={styles.row}>
        That left us with {statsParsed.contracts_considered_final} high-quality candidates.
        </Text>

        <Text style={styles.row}>
        From those, we selected the top 5 contracts based on {mode === 'roi' ? 'predicted return on investment (ROI)' : 'predicted profit'}.
        </Text>

        <Text style={styles.row}>
        This contract is one of them. See the details below.
        </Text>


      <Text style={styles.section}>Inputs</Text>
      <Text style={styles.row}>Your Prediction (S): ${S?.toFixed(2)}</Text>
      <Text style={styles.row}>Strike Price (K): ${K?.toFixed(2)}</Text>
      <Text style={styles.row}>
        Buy Mode: {priceMode === 'ask' ? 'Ask (guaranteed liquidity)' : 'Mid (favorable price, less certain)'}
        </Text>
        <Text style={styles.row}>
        Strategy: {mode === 'roi' ? 'Aggressive (max ROI)' : 'Strategic (max profit)'}
        </Text>
      <Text style={styles.row}>Time to Expiry (T): {T?.toFixed(4)} years</Text>
      <Text style={styles.row}>Implied Volatility (σ): {(sigma * 100)?.toFixed(2)}%</Text>
      <Text style={styles.row}>Risk-Free Rate (r): 5%</Text>
      <Text style={styles.section}>⚙️ How We Adjusted the Math</Text>

        {priceMode === 'ask' ? (
        <Text style={styles.row}>
            Because you chose to buy at the ask price, we calculated each option using the ask. This increases the chance of your order being filled, but can slightly reduce the estimated return due to the bid-ask spread.
        </Text>
        ) : (
        <Text style={styles.row}>
            Because you chose to buy at the mid price (between bid and ask), we optimized for better trade pricing — this improves ROI, but real-world execution may vary.
        </Text>
        )}

        {mode === 'profit' ? (
        <>
            <Text style={styles.row}>
            Your strategic strategy focused on maximizing total profit.
            From {statsParsed.total_contracts_available} available contracts:
            </Text>
            <Text style={styles.row}>
            • {statsParsed.total_contracts_available - statsParsed.contracts_after_prediction_filter} were removed for not matching your price or expiry prediction
            </Text>
            <Text style={styles.row}>
            • {statsParsed.contracts_after_prediction_filter - statsParsed.contracts_considered_final} more were excluded due to risk, illiquidity, or extreme volatility
            </Text>
            <Text style={styles.row}>
            That left {statsParsed.contracts_considered_final} contracts.
            We selected the top 5 based on expected absolute profit.
            </Text>
            <Text style={styles.row}>
            Strategic mode also excludes very short-term contracts (under 14 days) and those with price targets that fall outside typical market expectations — based on implied volatility and time.
            </Text>
        </>
        ) : (
        <Text style={styles.row}>
            Your aggressive strategy prioritized return on investment. We sorted all valid contracts by ROI, including those with higher risk or less certainty — if they showed strong return potential within your budget.
        </Text>
        )}


        <Text style={{ height: 10 }} />


      <Text style={styles.section}>Black-Scholes Formula</Text>
      <Text style={styles.row}>Call: C = S N(d₁) - K e^(-rT) N(d₂)</Text>
      <Text style={styles.row}>Put: P = K e^(-rT) N(-d₂) - S N(-d₁)</Text>
      <Text style={styles.row}>Here, S = your predicted price (not current market price)</Text>

      <Text style={styles.section}>d₁ and d₂ (for educational display)</Text>
      <Text style={styles.row}>d₁ = [ln(S/K) + (r + σ²/2) T] / (σ√T)</Text>
      <Text style={styles.row}>d₂ = d₁ - σ√T</Text>
      {valid ? (
        <>
          <Text style={styles.row}>→ d₁ = {d1.toFixed(4)}</Text>
          <Text style={styles.row}>→ d₂ = {d2.toFixed(4)}</Text>
        </>
      ) : (
        <Text style={styles.row}>d₁/d₂ = N/A (missing inputs)</Text>
      )}

      <Text style={styles.section}>Payoff Summary</Text>
      <Text style={styles.row}>Buy Price: ${buy_price?.toFixed(2)}</Text>
      <Text style={styles.row}>Contracts You Can Afford: {contracts_affordable}</Text>
      <Text style={styles.row}>Total Cost: ${total_cost?.toFixed(2)}</Text>
      <Text style={styles.row}>Estimated Payoff at Target: ${expected_value.toFixed(2)}</Text>
      <Text style={styles.row}>Predicted ROI: {roi.toFixed(1)}%</Text>

      <Text style={styles.footer}>
        This analysis assumes your price prediction is correct. It uses Black-Scholes
        to estimate what this option might be worth at expiry, and ranks contracts by return potential.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00ff88',
    marginBottom: 20,
  },
  section: {
    fontSize: 18,
    color: 'white',
    marginTop: 20,
    marginBottom: 8,
    fontWeight: '600',
  },
  row: {
    fontSize: 15,
    color: 'white',
    marginBottom: 6,
  },
  footer: {
    fontSize: 13,
    color: '#888',
    marginTop: 24,
  },
});
