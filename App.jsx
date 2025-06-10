import { StatusBar } from "expo-status-bar";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

import { handleButtonPress } from "./components/Button";
import { handleTouchButtonPress } from "./components/CustomButton";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World!!</Text>
      <Image
        source={{
          uri: "https://imgs.search.brave.com/SUkv4wN1Jb4apsztlxX3dIACgf17gVZUnQ6jIjZYmwk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA4/MzQ3Mjk1L3Bob3Rv/L2RlZXItY2VvLWF0/LWhpcy1kZXNrLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1R/bHJ6YVZ0WEFqejhZ/YjdaQVUyNTg3Q2Ft/dWthWTdFVzRTY2hH/YlZYczYwPQ",
        }}
        style={styles.image}
      />
      <StatusBar style="auto" />

      <Button title="Clique aqui" onPress={handleButtonPress} />

      <TouchableOpacity
        style={styles.customButton}
        onPress={handleTouchButtonPress}
      >
        <Text style={styles.buttonText}>Touchable Button</Text>
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

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 10,
  },

  customButton: {
    backgroundColor: "",
    padding: 10,
    borderRadius: 5,
    color: "white",
    textAlign: "center",
  },

  buttonText: {
    backgroundColor: "#333",
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    padding: 10,
    borderRadius: 5,
  },
});
