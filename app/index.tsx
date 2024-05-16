import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Slider from "@react-native-community/slider";
import { useState } from "react";
export default function App() {
  const [size, setSize] = useState(10);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.logo}
      />
      <Text style={styles.title}> {size} caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={6}
          maximumValue={20}
          thumbTintColor="#0a7ea4"
          minimumTrackTintColor="#0a7ea4"
          maximumTrackTintColor="#ff0000"
          value={size}
          onValueChange={(value) => setSize(value.toFixed(0))}
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    marginBottom: 60,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  area: {
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    borderRadius: 8,
  },
  button: {
    backgroundColor: "#0a7ea4",
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
