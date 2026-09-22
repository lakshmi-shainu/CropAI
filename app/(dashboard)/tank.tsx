import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Tank() {
  const capacity = 500;

  /* 🔥 FAKE LIVE DATA */
  const [current, setCurrent] = useState(250);

  /* 🔄 Simulate sensor updates */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => {
        let next = prev + (Math.random() * 20 - 10); // fluctuate
        if (next > capacity) next = capacity;
        if (next < 50) next = 50;
        return Math.round(next);
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const percentage = (current / capacity) * 100;

  /* 🎯 Animation */
  const animatedWidth = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedWidth, {
      toValue: percentage,
      duration: 800,
      useNativeDriver: false,
    }).start();
  }, [percentage]);

  const width = animatedWidth.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
  });

  /* 🧠 Status Logic */
  const getStatus = () => {
    if (percentage > 60) return "HEALTHY";
    if (percentage > 30) return "MODERATE";
    return "CRITICAL";
  };

  return (
    <View style={styles.container}>
      
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>WATER TANK</Text>
        <Text style={styles.status}>{getStatus()}</Text>
      </View>

      {/* MAIN CARD */}
      <View style={styles.card}>

        {/* CIRCLE */}
        <View style={styles.circle}>
          <Text style={styles.percent}>{percentage.toFixed(0)}%</Text>
          <Text style={styles.sub}>Tank Level</Text>
        </View>

        {/* PROGRESS */}
        <View style={styles.progress}>
          <Animated.View style={[styles.fill, { width }]} />
        </View>

        {/* INFO GRID */}
        <View style={styles.grid}>
          <Stat icon="water" label="Capacity" value={`${current} / ${capacity} L`} />
          <Stat icon="calendar-clock" label="Days Left" value={`${Math.floor(current / 40)} Days`} />
          <Stat icon="speedometer" label="Usage" value="40L/day" />
          <Stat icon="flash" label="Live Status" value="SIMULATED" />
        </View>

      </View>
    </View>
  );
}

/* 🔹 STAT COMPONENT */
const Stat = ({ icon, label, value }: any) => (
  <View style={styles.statBox}>
    <MaterialCommunityIcons name={icon} size={18} color="#22c55e" />
    <Text style={styles.statLabel}>{label}</Text>
    <Text style={styles.statValue}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000", // pure black
    padding: 20,
  },

  /* HEADER */
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  title: {
    color: "#22c55e",
    fontSize: 20,
    fontWeight: "700",
  },

  status: {
    color: "#22c55e",
    fontSize: 14,
  },

  /* CARD */
  card: {
    backgroundColor: "#050505",
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#22c55e33",
  },

  /* CIRCLE */
  circle: {
    alignSelf: "center",
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: "#22c55e",
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#22c55e",
    shadowOpacity: 0.8,
    shadowRadius: 20,
  },

  percent: {
    color: "#22c55e",
    fontSize: 32,
    fontWeight: "700",
  },

  sub: {
    color: "#4ade80",
    fontSize: 12,
  },

  /* PROGRESS */
  progress: {
    height: 6,
    backgroundColor: "#022c22",
    borderRadius: 10,
    marginVertical: 20,
  },

  fill: {
    height: "100%",
    backgroundColor: "#22c55e",
    borderRadius: 10,
  },

  /* GRID */
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  statBox: {
    width: "48%",
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
    backgroundColor: "#020202",
    borderWidth: 1,
    borderColor: "#22c55e22",
  },

  statLabel: {
    color: "#4ade80",
    fontSize: 11,
    marginTop: 5,
  },

  statValue: {
    color: "#22c55e",
    fontWeight: "600",
    marginTop: 3,
  },
});