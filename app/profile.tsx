import { View, Text, Pressable, Image } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Profile() {

  const router = useRouter();
  const { crop } = useLocalSearchParams();

  const email = "admin@gmail.com";
  const name = email.split("@")[0];
  const displayName =
    name.charAt(0).toUpperCase() + name.slice(1);

  const handleLogout = () => {
    router.replace("/(auth)/login");
  };

  const handleClose = () => {
    router.back();
  };

  return (
    <View style={{
      flex:1,
      backgroundColor:"#000",
      padding:20
    }}>

      {/* 🔥 HEADER (Logo + Profile + Close) */}
      <View style={{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:30
      }}>

        {/* LEFT SIDE */}
        <View style={{ flexDirection:"row", alignItems:"center" }}>

          <Image
            source={require("../assets/images/crop-ai-logo.png")}
            style={{
              width:40,
              height:40,
              borderRadius:20, // 🔥 circle logo
              marginRight:10
            }}
          />

          <Text style={{
            color:"#00ff9c",
            fontSize:24,
            fontWeight:"700"
          }}>
            Profile
          </Text>

        </View>

        {/* RIGHT SIDE */}
        <Pressable onPress={handleClose}>
          <MaterialCommunityIcons
            name="close"
            size={26}
            color="#00ff9c"
          />
        </Pressable>

      </View>

      {/* PROFILE CARD */}
      <View style={{
        backgroundColor:"#050505",
        padding:20,
        borderRadius:20,
        borderWidth:1,
        borderColor:"#00ff9c"
      }}>

        <Text style={{ color:"#00ff9c88", fontSize:12 }}>
          Name
        </Text>
        <Text style={{ color:"#fff", fontSize:18, marginBottom:15 }}>
          {displayName}
        </Text>

        <Text style={{ color:"#00ff9c88", fontSize:12 }}>
          Email
        </Text>
        <Text style={{ color:"#fff", fontSize:18, marginBottom:15 }}>
          {email}
        </Text>

        <Text style={{ color:"#00ff9c88", fontSize:12 }}>
          Selected Crop
        </Text>
        <Text style={{ color:"#fff", fontSize:18 }}>
          {crop || "Not Selected"}
        </Text>

      </View>

      {/* LOGOUT BUTTON */}
      <Pressable
        onPress={handleLogout}
        style={{
          marginTop:30,
          backgroundColor:"#00ff9c",
          padding:15,
          borderRadius:15
        }}
      >
        <Text style={{
          color:"#000",
          textAlign:"center",
          fontWeight:"700"
        }}>
          Logout
        </Text>
      </Pressable>

    </View>
  );
}