import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";

import { useState, useEffect } from "react";

export default function HomeScreen({ navigation }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 10) {
      Alert.alert("congrats, você atingiu 10 clicks!");
    }
    if (count < 0) {
      Alert.alert("O contador não pode ser negativo!");
      setCount(0);
    }
  }, [count]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de items</Text>
      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>Contador: {count}</Text>

        <TouchableOpacity
          style={styles.counterButton}
          onPress={() => setCount((prev) => prev + 1)}
        >
          <Text style={styles.buttonText}>Incrementar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.counterButton}
          onPress={() => setCount((prev) => Math.max(0, prev - 1))}
        >
          <Text style={styles.buttonText}>Decrementar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.counterButton, { backgroundColor: "#ff0000" }]}
          onPress={() => setCount(0)}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.counterButton, { backgroundColor: "#ff0000" }]}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.buttonText}>Ir para perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  counterContainer: {
    alignItems: "center",
  },
  counterText: {
    fontSize: 18,
    marginBottom: 10,
  },
  counterButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
