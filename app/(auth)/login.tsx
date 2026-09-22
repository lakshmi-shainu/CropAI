import { View, Text, TextInput, Pressable, Animated } from "react-native";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "expo-router";

export default function Login() {

  const router = useRouter();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");

  const [showLogin, setShowLogin] = useState(false);

  // Splash animation
  const splashOpacity = useRef(new Animated.Value(1)).current;
  const loginOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {

    // Wait 2 sec → fade out splash → show login
    setTimeout(() => {
      Animated.timing(splashOpacity, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => {
        setShowLogin(true);

        Animated.timing(loginOpacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }).start();
      });
    }, 1000);

  }, []);

  const handleLogin = () => {
    if(email === "admin@gmail.com" && password === "123456"){
      router.replace("/(dashboard)");
    } else {
      setError("Invalid email or password");
    }
  };

  return(

    <View style={{ flex:1, backgroundColor:"#000" }}>

      {/* 🔥 SPLASH SCREEN */}
      {!showLogin && (
        <Animated.View style={{
          flex:1,
          justifyContent:"center",
          alignItems:"center",
          opacity: splashOpacity
        }}>
          <Animated.Image
            source={require("../../assets/images/crop-ai-logo.png")}
            style={{ width:150, height:150 }}
            resizeMode="contain"
          />
        </Animated.View>
      )}

      {/* 🔥 LOGIN SCREEN */}
      {showLogin && (
        <Animated.View style={{
          flex:1,
          justifyContent:"center",
          padding:20,
          opacity: loginOpacity
        }}>

          {/* Logo on top */}
          <Animated.Image
            source={require("../../assets/images/crop-ai-logo.png")}
            style={{
              width:100,
              height:100,
              alignSelf:"center",
              marginBottom:20
            }}
            resizeMode="contain"
          />

          {/* Title */}
          <Text style={{
            fontSize:24,
            textAlign:"center",
            marginBottom:20,
            color:"#00ff9c",
            fontWeight:"700"
          }}>
            Crop AI Login
          </Text>

          {/* Email */}
          <TextInput
            placeholder="Email"
            placeholderTextColor="#888"
            value={email}
            onChangeText={setEmail}
            style={{
              borderWidth:1,
              borderColor:"#00ff9c",
              padding:10,
              marginBottom:10,
              color:"#fff",
              borderRadius:10
            }}
          />

          {/* Password */}
          <TextInput
            placeholder="Password"
            placeholderTextColor="#888"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            style={{
              borderWidth:1,
              borderColor:"#00ff9c",
              padding:10,
              marginBottom:10,
              color:"#fff",
              borderRadius:10
            }}
          />

          {/* Button */}
          <Pressable
            style={{
              backgroundColor:"#00ff9c",
              padding:12,
              borderRadius:10,
              marginTop:10
            }}
            onPress={handleLogin}
          >
            <Text style={{
              color:"#000",
              textAlign:"center",
              fontWeight:"700"
            }}>
              Login
            </Text>
          </Pressable>

          {/* Error */}
          {error !== "" && (
            <Text style={{
              color:"red",
              marginTop:10,
              textAlign:"center"
            }}>
              {error}
            </Text>
          )}

        </Animated.View>
      )}

    </View>

  );
}