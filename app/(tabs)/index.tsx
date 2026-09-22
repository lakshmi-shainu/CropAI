import { View, Text, TextInput, Pressable } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import styles from "../../styles/styles";

export default function Login() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {

    if (email === "admin@gmail.com" && password === "123456") {
      router.replace("/dashboard");
    } else {
      setError("Invalid email or password");
    }

  };

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Crop AI Login
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>
          Login
        </Text>
      </Pressable>

      {error !== "" && (
        <Text style={styles.error}>
          {error}
        </Text>
      )}

    </View>

  );
}