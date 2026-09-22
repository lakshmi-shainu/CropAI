import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Dashboard() {
  const router = useRouter();
  const [selectedCrop, setSelectedCrop] = useState("Rice");
  const [showAlert, setShowAlert] = useState(false);

  const crops = [
    {
      name: "Rice",
      icon: "🌾",
      level: "HIGH",
      water: "8.6L",
      moisture: "70–90%",
      temp: "25–35°C",
      frequency: "2x daily",
      need: "HIGH",
    },
    {
      name: "Wheat",
      icon: "🌿",
      level: "MEDIUM",
      water: "5.2L",
      moisture: "40–60%",
      temp: "20–30°C",
      frequency: "1x daily",
      need: "MEDIUM",
    },
    {
      name: "Tomato",
      icon: "🍅",
      level: "MEDIUM",
      water: "6.1L",
      moisture: "60–80%",
      temp: "22–30°C",
      frequency: "2x daily",
      need: "MEDIUM",
    },
    {
      name: "Potato",
      icon: "🥔",
      level: "MEDIUM",
      water: "4.8L",
      moisture: "50–70%",
      temp: "18–25°C",
      frequency: "1x daily",
      need: "MEDIUM",
    },
    {
      name: "Maize",
      icon: "🌽",
      level: "MEDIUM",
      water: "7.0L",
      moisture: "60–75%",
      temp: "25–35°C",
      frequency: "2x daily",
      need: "MEDIUM",
    },
  ];

  const cropData = crops.find((c) => c.name === selectedCrop);

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      
      {/* HEADER */}
      <View style={styles.topBar}>
        <View style={styles.topRow}>
          <Text style={styles.systemText}>● CROP AI — SMART GREENHOUSE OS</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.statusText}>UPTIME 00h 10m</Text>
            <Text style={styles.statusText}>PUMP STANDBY</Text>
          </View>
        </View>

        <View style={styles.headerMain}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.logoCircle}>
              <Text>🌱</Text>
            </View>

            <View style={{ marginLeft: 10 }}>
              <Text style={styles.appName}>Crop AI</Text>
              <Text style={styles.subName}>SMART GREENHOUSE</Text>
            </View>
          </View>

          <View style={styles.rightIcons}>
            <TouchableOpacity onPress={() => setShowAlert(true)}>
              <View style={styles.bellWrapper}>
                <MaterialCommunityIcons name="bell-outline" size={22} color="#00ff9c" />
                <View style={styles.badgeDot}>
                  <Text style={{ color: "#fff", fontSize: 10 }}>3</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
  style={styles.profileBtn}
  onPress={() => router.push(`/profile?crop=${selectedCrop}`)}
>
              <MaterialCommunityIcons name="account-outline" size={18} color="#00ff9c" />
              <Text style={{ marginLeft: 5, color: "#00ff9c" }}>Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* CONTENT */}
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

        {/* Temperature */}
        <View style={styles.card}>
          <View style={styles.row}>
            <MaterialCommunityIcons name="thermometer" size={22} color="#ff4444" />
            <Text style={styles.title}>Temperature</Text>
            <Text style={styles.badge}>HOT</Text>
          </View>
          <Text style={styles.value}>38°C</Text>
          <Text style={styles.sub}>Dry conditions</Text>
        </View>

        {/* Surface Moisture */}
        <View style={styles.card}>
          <View style={styles.row}>
            <MaterialCommunityIcons name="water-percent" size={22} color="#00ff9c" />
            <Text style={styles.title}>Surface Moisture</Text>
          </View>
          <Text style={styles.value}>19%</Text>
          <View style={styles.bar}>
            <View style={[styles.fillGreen, { width: "19%" }]} />
          </View>
          <Text style={styles.sub}>Dry (10 cm)</Text>
        </View>

        {/* Root Moisture */}
        <View style={styles.card}>
          <View style={styles.row}>
            <MaterialCommunityIcons name="sprout" size={22} color="#00ff9c" />
            <Text style={styles.title}>Root Moisture</Text>
          </View>
          <Text style={styles.value}>31%</Text>
          <View style={styles.bar}>
            <View style={[styles.fillGreen, { width: "31%" }]} />
          </View>
          <Text style={styles.sub}>Moderate (30 cm)</Text>
        </View>

        {/* Water Tank */}
        <View style={styles.card}>
          <View style={styles.row}>
            <MaterialCommunityIcons name="water" size={22} color="#00ff9c" />
            <Text style={styles.title}>Water Tank</Text>
          </View>
          <Text style={styles.value}>250 / 500 L</Text>
          <View style={styles.bar}>
            <View style={[styles.fillGreen, { width: "50%" }]} />
          </View>
        </View>

        {/* ACTIVE CROP */}
        <View style={{ marginTop: 25 }}>
          <View style={styles.cropHeader}>
            <Text style={styles.cropHeading}>ACTIVE CROP</Text>
            <Text style={styles.changeBtn}>Change crop</Text>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {crops.map((crop) => {
              const isActive = selectedCrop === crop.name;
              return (
                <TouchableOpacity
                  key={crop.name}
                  style={[styles.cropCard, isActive && styles.cropActive]}
                  onPress={() => setSelectedCrop(crop.name)}
                >
                  <Text style={styles.cropIcon}>{crop.icon}</Text>
                  <Text style={styles.cropName}>{crop.name}</Text>
                  <View style={styles.levelBadge}>
                    <Text style={styles.levelText}>{crop.level}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        {/* CROP DETAIL */}
        <View style={styles.cropDetailCard}>
          <Text style={styles.cropTitle}>{selectedCrop}</Text>

          <View style={styles.grid}>
            <Info label="Temp Range" value={cropData?.temp} />
            <Info label="Moisture" value={cropData?.moisture} />
            <Info label="Frequency" value={cropData?.frequency} />
            <Info label="Water Need" value={cropData?.need} highlight />
          </View>
        </View>

        {/* CROP OVERVIEW */}
        <View style={styles.overviewCard}>
          <View style={styles.overviewHeader}>
            <Text style={styles.overviewTitle}>CROP OVERVIEW</Text>
            <Text style={styles.overviewCrop}>{selectedCrop}</Text>
            <Text style={styles.growingBadge}>GROWING</Text>
          </View>

          <View style={styles.grid}>
            <Info label="Water Required" value={cropData?.water} />
            <Info label="Stage" value="Vegetative" />
            <Info label="Growth" value="56%" />
            <Info label="Days Planted" value="45d" highlight />
          </View>
        </View>

      </ScrollView>

      {/* ALERT MODAL */}
      <Modal visible={showAlert} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Alerts</Text>
            <Text style={styles.alertText}>🔥 High Temperature</Text>
            <Text style={styles.alertText}>💧 Low Soil Moisture</Text>
            <Text style={styles.alertText}>🚰 Tank Medium</Text>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowAlert(false)}
            >
              <Text style={styles.closeText}>Dismiss</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </View>
  );
}

const Info = ({ label, value, highlight }: any) => (
  <View style={styles.infoBox}>
    <Text style={styles.infoLabel}>{label}</Text>
    <Text style={highlight ? styles.infoValueGreen : styles.infoValue}>
      {value}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: { padding: 20 },

  topBar: {
    backgroundColor: "#000",
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#00ff9c",
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  systemText: { color: "#00ff9c", fontSize: 12 },

  statusText: { color: "#00ff9c", fontSize: 11, marginLeft: 10 },

  headerMain: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logoCircle: { backgroundColor: "#001a12", padding: 8, borderRadius: 20 },

  appName: { fontSize: 18, color: "#00ff9c", fontWeight: "700" },

  subName: { fontSize: 10, color: "#00ff9c88" },

  rightIcons: { flexDirection: "row", alignItems: "center" },

  bellWrapper: { position: "relative", padding: 6 },

  badgeDot: {
    position: "absolute",
    top: -2,
    right: -2,
    backgroundColor: "#ff4444",
    borderRadius: 10,
    paddingHorizontal: 4,
  },

  profileBtn: { flexDirection: "row", alignItems: "center", marginLeft: 10 },

  card: {
    backgroundColor: "#050505",
    padding: 16,
    borderRadius: 20,
    marginTop: 15,
    borderWidth: 1,
    borderColor: "#00ff9c",
  },

  row: { flexDirection: "row", alignItems: "center" },

  title: { color: "#00ff9c", marginLeft: 8 },

  value: { fontSize: 28, color: "#fff", fontWeight: "700" },

  sub: { color: "#00ff9c88", fontSize: 12 },

  badge: { marginLeft: "auto", color: "#ff4444", fontWeight: "700" },

  bar: {
    height: 8,
    backgroundColor: "#00221a",
    borderRadius: 10,
    marginVertical: 6,
  },

  fillGreen: {
    height: "100%",
    backgroundColor: "#00ff9c",
    borderRadius: 10,
  },

  cropHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  cropHeading: { color: "#00ff9c", fontWeight: "700" },

  changeBtn: { color: "#00ff9c", opacity: 0.7 },

  cropCard: {
    width: 90,
    backgroundColor: "#050505",
    padding: 12,
    borderRadius: 16,
    alignItems: "center",
    marginRight: 12,
    borderWidth: 1,
    borderColor: "#111",
  },

  cropActive: { borderColor: "#00ff9c" },

  cropName: { color: "#fff", marginTop: 5 },

  cropIcon: { fontSize: 22 },

  levelBadge: {
    marginTop: 5,
    backgroundColor: "#00221a",
    paddingHorizontal: 8,
    borderRadius: 10,
  },

  levelText: { color: "#00ff9c", fontSize: 10 },

  cropDetailCard: {
    backgroundColor: "#050505",
    padding: 16,
    borderRadius: 20,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#00ff9c",
  },

  cropTitle: { color: "#00ff9c", fontSize: 18, fontWeight: "700" },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  infoBox: {
    width: "48%",
    backgroundColor: "#000",
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#00ff9c",
  },

  infoLabel: { color: "#00ff9c88", fontSize: 11 },

  infoValue: { color: "#fff", marginTop: 4 },

  infoValueGreen: { color: "#00ff9c", marginTop: 4, fontWeight: "700" },

  overviewCard: {
    backgroundColor: "#050505",
    padding: 16,
    borderRadius: 20,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#00ff9c",
  },

  overviewHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  overviewTitle: { color: "#00ff9c", fontSize: 12, marginRight: 10 },

  overviewCrop: { color: "#fff", fontWeight: "700", marginRight: 10 },

  growingBadge: {
    backgroundColor: "#00221a",
    color: "#00ff9c",
    paddingHorizontal: 8,
    borderRadius: 10,
    fontSize: 10,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalBox: {
    backgroundColor: "#050505",
    padding: 20,
    borderRadius: 20,
    width: "80%",
    borderWidth: 1,
    borderColor: "#00ff9c",
  },

  modalTitle: { color: "#00ff9c", fontSize: 18 },

  alertText: { color: "#fff", marginBottom: 5 },

  closeButton: {
    marginTop: 10,
    backgroundColor: "#00ff9c",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },

  closeText: { color: "#000", fontWeight: "700" },
});