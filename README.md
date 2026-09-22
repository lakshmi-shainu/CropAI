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
🧠 Key Feature
Crop Growth-Stage Intelligence

The main concept behind Crop AI is its crop database.

Instead of using one fixed moisture threshold throughout the entire crop lifecycle, the system stores moisture requirements according to:

Crop
 └── Growth Stage
      └── Moisture Threshold

This allows irrigation decisions to adapt to the biological requirements of the crop.

🔧 Hardware Components
Component	Purpose
ESP8266 NodeMCU	Main controller and Wi-Fi communication
Capacitive Soil Moisture Sensor	Measures soil moisture
Water-Level Sensor	Monitors water availability
Relay Module	Controls irrigation equipment
Mini Water Pump	Supplies irrigation water
Solenoid Valve / Tubing	Controls water distribution
Power Supply	Provides system power

The prototype described in the research paper has an approximate component cost of ₹3,350.

🗄️ Crop Database

The database stores:

Crop name
Growth stage
Required moisture threshold
Sensor logs

The database allows the irrigation logic to change according to the selected crop and its development stage.

🔄 Irrigation Logic

The basic decision rule is:

IF current soil moisture < required threshold
        ↓
    Start irrigation

ELSE
        ↓
    Keep irrigation OFF

The system continuously reads sensor values and makes irrigation decisions based on the selected crop and growth stage.

📊 Monitoring Dashboard

The monitoring interface can display:

Soil moisture
Water/tank level
Pump status
Irrigation status
Alerts
Basic system logs

This provides a simple way to monitor the greenhouse irrigation system remotely.

🏗️ System Architecture

Crop AI follows a three-layer IoT architecture:

1. Input Layer

Collects data from:

Soil moisture sensors
Water-level sensor
2. Processing Layer

The ESP8266:

Reads sensor values
Connects through Wi-Fi
Retrieves crop-stage moisture requirements
Executes irrigation logic
3. Output / Interface Layer

Controls:

Pump
Solenoid valve
Monitoring dashboard

🌍 Applications

Crop AI can be applied to:

Smart greenhouse irrigation
Water-efficient vegetable cultivation
Flower cultivation
Medicinal plants
Nursery plants
Agricultural education and demonstrations
Small-scale greenhouse farming

The architecture can also be extended toward larger greenhouse deployments and future agricultural applications.

🚀 Future Scope

Future versions of Crop AI can incorporate:

🌦️ Weather forecasting
💧 Evapotranspiration estimation
🤖 Machine learning-based prediction
🌡️ Temperature and humidity monitoring
🧪 pH and NPK sensing
☀️ Solar-powered operation
📡 Long-range communication
🌾 Open-field irrigation
📱 Advanced mobile monitoring

These extensions could make the system more predictive, scalable, and adaptable.

📈 Research & Results

The research presents Crop AI as a prototype-level system and reports an indicative, rather than field-validated, comparison of irrigation approaches.

The paper estimates relative water use of approximately:

Irrigation Approach	Relative Water Use
Manual / Timer	100% baseline
Fixed-Threshold IoT	~78%
Crop AI	~65%

These figures are explicitly described as prototype estimates requiring further validation through controlled greenhouse trials and multiple crop cycles.

👩‍💻 Project Team

Srushti Bihade
Lakshmi Shainu
Parth Kumthekar
Vedant Paradkar

Dnyaan Prasad Global University

Research Publication

Crop AI: A Crop-Database-Driven Smart Greenhouse Irrigation System for Drought-Prone Regions

Published in the International Journal of Innovative Science and Research Technology, Volume 11, Issue 7, July 2026.

📄 Research Paper

DOI: 10.38124/ijisrt/26jul581

🌱 Vision

Crop AI aims to combine IoT, crop-specific data, and intelligent irrigation logic to make greenhouse water management more responsive and sustainable, particularly for drought-prone and resource-constrained environments.
