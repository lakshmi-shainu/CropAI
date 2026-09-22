import React from "react";
import { View, Text, Dimensions, StyleSheet, ScrollView } from "react-native";
import { LineChart } from "react-native-chart-kit";

export default function Dashboard() {
  const screenWidth = Dimensions.get("window").width;

  // ✅ STATIC DATA (no animation)
  const tempData = [25, 28, 30, 27, 29, 31];
  const soilData = [45, 60, 55, 40, 65, 75];

  const tempCurrent = tempData[tempData.length - 1];
  const soilCurrent = soilData[soilData.length - 1];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      <Text style={styles.title}>DASHBOARD</Text>

      {/* 🌡️ Temperature */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Temperature</Text>
        </View>

        <Text style={styles.value}>{tempCurrent}°C</Text>

        <LineChart
          data={{
            labels: ["1", "2", "3", "4", "5", "6"],
            datasets: [{ data: tempData }],
          }}
          width={screenWidth - 60}
          height={180}
          yAxisSuffix="°"
          chartConfig={chartConfig("#22c55e")}
          bezier
          withShadow={false}
          style={styles.chart}
        />
      </View>

      {/* 🌱 Soil Moisture */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Soil Moisture</Text>
        </View>

        <Text style={styles.value}>{soilCurrent}%</Text>

        <LineChart
          data={{
            labels: ["1", "2", "3", "4", "5", "6"],
            datasets: [{ data: soilData }],
          }}
          width={screenWidth - 60}
          height={180}
          yAxisSuffix="%"
          chartConfig={chartConfig("#4ade80")}
          bezier
          withShadow={false}
          style={styles.chart}
        />
      </View>

    </ScrollView>
  );
}

/* 🔥 CHART CONFIG */
const chartConfig = (color: string) => ({
  backgroundGradientFrom: "#020617",
  backgroundGradientTo: "#020617",
  decimalPlaces: 0,
  color: () => color,
  labelColor: () => "#4ade80",
  propsForDots: {
    r: "4",
    strokeWidth: "2",
    stroke: color,
  },
  propsForBackgroundLines: {
    strokeDasharray: "4",
    stroke: "#052e1a",
  },
});

/* 🎨 STYLES */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#22c55e",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#050505",
    borderRadius: 24,
    padding: 18,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#22c55e22",

    shadowColor: "#22c55e",
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },

  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },

  cardTitle: {
    color: "#4ade80",
    fontSize: 14,
  },

  value: {
    fontSize: 32,
    fontWeight: "700",
    color: "#22c55e",
    marginBottom: 10,
  },

  chart: {
    borderRadius: 16,
  },
});