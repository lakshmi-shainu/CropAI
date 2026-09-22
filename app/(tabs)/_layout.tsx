import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>

      <Tabs.Screen
        name="dashboard"
        options={{ title: "Dashboard" }}
      />

      <Tabs.Screen
        name="temperature"
        options={{ title: "Temp" }}
      />

      <Tabs.Screen
        name="soilmoisture"
        options={{ title: "Soil" }}
      />

      <Tabs.Screen
        name="alerts"
        options={{ title: "Alerts" }}
      />

    </Tabs>
  );
}

