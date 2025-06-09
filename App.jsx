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
          uri: "https://imgs.search.brave.com/SlTHWuHDew_O26Ziha9_b4os6wIvUZzdhF65Q5CWYM4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI1/NTkwNTMzMS9mci9w/aG90by9waG90b2dy/YXBoZS1kZS12b3lh/Z2UtcmV0ZW5hbnQt/ZGVzLWltYWdlcy12/dWUtc3VwJUMzJUE5/cmlldXJlLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1nRHZX/T1ZfWHVWdER4SEgw/Z0Z2bGdhTUhCMFpO/dzhhUkF6NXFRakVo/TUxnPQ",
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
