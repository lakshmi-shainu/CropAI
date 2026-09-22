# 🌱 Crop AI — Smart Greenhouse Irrigation System

### Crop-Database-Driven Smart Irrigation for Drought-Prone Regions

Crop AI is a low-cost IoT-based smart greenhouse irrigation system designed to support efficient water management in drought-prone regions.

Unlike traditional timer-based irrigation systems, Crop AI considers both **real-time soil moisture** and the **specific moisture requirement of a crop at its current growth stage** before making an irrigation decision.

The system uses an **ESP8266 microcontroller, soil moisture sensors, water-level monitoring, a crop database, relay-controlled irrigation, and a monitoring dashboard**.

---

## 🌾 Problem

Agriculture in drought-prone regions faces challenges such as:

- Water scarcity
- Irregular rainfall
- Over-irrigation
- Under-irrigation
- Fixed timer-based watering
- Different water requirements at different crop growth stages

Traditional irrigation systems often use fixed schedules or a single moisture threshold, which does not adapt to the changing requirements of crops.

---

## 💡 Our Solution

Crop AI introduces a **crop-stage-aware irrigation approach**.

The system:

1. Selects the crop and its current growth stage.
2. Retrieves the required moisture threshold from the crop database.
3. Reads real-time soil moisture.
4. Monitors available water in the tank.
5. Compares actual moisture with the required threshold.
6. Activates irrigation only when necessary.
7. Displays system information through a monitoring dashboard.

This creates a continuous feedback loop between the crop database, sensors, controller, and irrigation system.

---

## ⚙️ How Crop AI Works

```text
        Crop Selection
              ↓
      Growth Stage Selection
              ↓
      Crop Database
              ↓
    Required Moisture Level
              ↓
      Soil Moisture Sensor
              ↓
       ESP8266 Controller
              ↓
     Compare Moisture Values
              ↓
      ┌───────┴────────┐
      ↓                ↓
 Below Threshold    Adequate
      ↓                ↓
 Pump ON            Pump OFF
      ↓                ↓
 Irrigation       Continue Monitoring
