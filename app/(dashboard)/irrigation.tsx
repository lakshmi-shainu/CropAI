import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Irrigation() {
  const [mode, setMode] = useState("normal");
  const [isRunning, setIsRunning] = useState(false);

  const moisture = 56;

  const getStatus = () => {
    if (moisture > 60) return { text: "OPTIMAL", color: "#22c55e" };
    if (moisture > 30) return { text: "MODERATE", color: "#facc15" };
    return { text: "LOW", color: "#ef4444" };
  };

  const status = getStatus();

  return (
    <View style={styles.container}>
      
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>IRRIGATION</Text>
      </View>

      {/* MOISTURE CARD */}
      <View style={styles.card}>
        <Text style={styles.percent}>{moisture}%</Text>
        <Text style={styles.sub}>Soil Moisture Level</Text>

        <View style={styles.progress}>
          <View
            style={[
              styles.fill,
              { width: `${moisture}%`, backgroundColor: status.color },
            ]}
          />
        </View>
      </View>

      {/* MODES */}
      <Text style={styles.section}>MODES</Text>

      <ModeCard
        icon="leaf"
        title="Normal Mode"
        desc="Balanced watering for healthy growth"
        active={mode === "normal"}
        onPress={() => setMode("normal")}
      />

      <ModeCard
        icon="water"
        title="Water Saving"
        desc="Optimized usage to conserve water"
        active={mode === "saving"}
        onPress={() => setMode("saving")}
      />

      <ModeCard
        icon="sprout"
        title="Survival Mode"
        desc="Minimal watering for extreme conditions"
        active={mode === "survival"}
        onPress={() => setMode("survival")}
      />

      {/* ✅ STATUS BELOW MODES */}
      <View style={styles.statusBox}>
        <MaterialCommunityIcons
          name={isRunning ? "play-circle" : "stop-circle"}
          size={20}
          color={isRunning ? "#22c55e" : "#ef4444"}
        />
        <Text
          style={[
            styles.statusText,
            { color: isRunning ? "#22c55e" : "#ef4444" },
          ]}
        >
          {isRunning ? "IRRIGATION STARTED" : "IRRIGATION STOPPED"}
        </Text>
      </View>

      {/* BUTTONS */}
      <View style={styles.row}>
        <ControlBtn
          color="#ef4444"
          icon="stop-circle"
          text="STOP"
          onPress={() => setIsRunning(false)}
        />

        <ControlBtn
          color="#22c55e"
          icon="play-circle"
          text={isRunning ? "RUNNING" : "START"}
          onPress={() => setIsRunning(true)}
        />
      </View>
    </View>
  );
}

/* 🔹 MODE CARD */
const ModeCard = ({ icon, title, desc, active, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.modeCard, active && styles.activeCard]}
  >
    <MaterialCommunityIcons
      name={icon}
      size={22}
      color={active ? "#22c55e" : "#6b7280"}
    />

    <View style={{ marginLeft: 12, flex: 1 }}>
      <Text style={[styles.modeTitle, active && { color: "#22c55e" }]}>
        {title}
      </Text>
      <Text style={styles.modeDesc}>{desc}</Text>
    </View>

    {active && (
      <MaterialCommunityIcons name="check-circle" size={20} color="#22c55e" />
    )}
  </TouchableOpacity>
);

/* 🔹 BUTTON */
const ControlBtn = ({ color, icon, text, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.btn, { backgroundColor: color }]}
  >
    <MaterialCommunityIcons name={icon} size={18} color="#fff" />
    <Text style={styles.btnText}>{text}</Text>
  </TouchableOpacity>
);

/* 🔥 STYLES */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#22c55e",
    letterSpacing: 1,
  },

  card: {
    backgroundColor: "#050505",
    padding: 22,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#22c55e22",
    marginBottom: 20,
  },

  percent: {
    fontSize: 40,
    fontWeight: "700",
    color: "#22c55e",
  },

  sub: {
    color: "#4ade80",
    marginBottom: 12,
  },

  progress: {
    height: 6,
    backgroundColor: "#022c22",
    borderRadius: 10,
  },

  fill: {
    height: "100%",
    borderRadius: 10,
  },

  section: {
    color: "#4ade80",
    marginBottom: 10,
    fontSize: 13,
  },

  modeCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#050505",
    padding: 16,
    borderRadius: 18,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#22c55e11",
  },

  activeCard: {
    borderColor: "#22c55e",
    backgroundColor: "#022c22",
  },

  modeTitle: {
    color: "#e5e7eb",
    fontWeight: "600",
    fontSize: 14,
  },

  modeDesc: {
    color: "#6b7280",
    fontSize: 12,
  },

  statusBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    padding: 12,
    borderRadius: 14,
    backgroundColor: "#050505",
    borderWidth: 1,
    borderColor: "#22c55e22",
    gap: 8,
  },

  statusText: {
    fontWeight: "700",
    fontSize: 14,
  },

  row: {
    flexDirection: "row",
    marginTop: 20,
    gap: 12,
  },

  btn: {
    flex: 1,
    padding: 14,
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },

  btnText: {
    color: "#fff",
    fontWeight: "600",
  },
});