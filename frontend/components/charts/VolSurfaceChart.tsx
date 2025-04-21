import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions, ActivityIndicator, Text } from 'react-native';
import { WebView } from 'react-native-webview';

const API_BASE = 'https://option-ranker-backend-production.up.railway.app';

type Props = {
  ticker: string;
};

export default function VolSurfaceChart({ ticker }: Props) {
  const [loading, setLoading] = useState(true);
  const [plotData, setPlotData] = useState<{ strikes: number[]; expiries: number[]; ivs: number[][] } | null>(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      try {
        const response = await fetch(`${API_BASE}/vol-surface?ticker=${ticker}`);
        const data = await response.json();

        if (
          data &&
          Array.isArray(data.strikes) &&
          data.strikes.length > 0 &&
          Array.isArray(data.expiries) &&
          data.expiries.length > 0 &&
          Array.isArray(data.ivs) &&
          data.ivs.length > 0
        ) {
          setPlotData(data);
        } else {
          setPlotData(null); // no data
        }
      } catch (error) {
        console.error('Failed to load vol surface:', error);
        setPlotData(null);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [ticker]);

  const html = (data: { strikes: number[]; expiries: number[]; ivs: number[][] }) => `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
        <style>
          body { margin: 0; background: black; overflow: hidden; }
          #chart { width: 100vw; height: 100vh; }
        </style>
      </head>
      <body>
        <div id="chart"></div>
        <script>
          const chartDiv = document.getElementById('chart');
          const strikes = ${JSON.stringify(data.strikes)};
          const expiries = ${JSON.stringify(data.expiries)};
          const ivs = ${JSON.stringify(data.ivs)};

          const surface = {
            type: 'surface',
            x: expiries,
            y: strikes,
            z: ivs,
            colorscale: 'Jet',
            showscale: true,
            opacity: 0.9,
            colorbar: { thickness: 10 },
          };

          const layout = {
            paper_bgcolor: 'black',
            plot_bgcolor: 'black',
            margin: { l: 0, r: 0, b: 0, t: 20 },
            scene: {
              xaxis: { title: 'Days to Expiry', color: 'white' },
              yaxis: { title: 'Strike', color: 'white' },
              zaxis: { title: 'IV (%)', color: 'white' },
              camera: {
                eye: { x: 1.0, y: 2.0, z: 0.8 },
                center: { x: 0.05, y: 0, z: 0 }
              },
              aspectmode: 'manual',
              aspectratio: { x: 0.5, y: 0.5, z: 1.5 },
              dragmode: 'turntable',
            }
          };

          Plotly.newPlot(chartDiv, [surface], layout, { displayModeBar: false });
        </script>
      </body>
    </html>
  `;

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="white" />
      ) : !plotData ? (
        <Text style={styles.warning}>
          ⚠️ No volatility data available. The market may be closed or Yahoo returned no data.
        </Text>
      ) : (
        <WebView
          originWhitelist={['*']}
          source={{ html: html(plotData) }}
          javaScriptEnabled
          domStorageEnabled
          startInLoadingState
          style={styles.webview}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' },
  webview: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  warning: {
    color: 'orange',
    textAlign: 'center',
    padding: 20,
    fontSize: 16,
  },
});
