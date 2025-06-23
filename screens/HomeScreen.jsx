import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import { useState, useEffect } from "react";

export default function HomeScreen({ navigation }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 10) {
      Alert.alert("nice!", "Você cricko 10 veiz!");
    }
    if (count < 0) {
      Alert.alert("Aviso", "O contador não pode ser negativo!");
      setCount(0);
    }
  }, [count]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Inicial</Text>

      <View style={styles.counterBox}>
        <Text style={styles.counterText}>Contador: {count}</Text>

        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={[styles.button, styles.increment]}
            onPress={() => setCount((prev) => prev + 1)}
          >
            <Text style={styles.buttonText}>Incrementar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.decrement]}
            onPress={() => setCount((prev) => prev - 1)}
          >
            <Text style={styles.buttonText}>Decrementar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.reset]}
            onPress={() => setCount(0)}
          >
            <Text style={styles.buttonText}>Resetar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.navGroup}>
        <TouchableOpacity
          style={[styles.navButton, { backgroundColor: "#28a745" }]}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.buttonText}>Ir para Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  counterBox: {
    alignItems: "center",
    marginBottom: 30,
  },
  counterText: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 20,
  },
  buttonGroup: {
    width: "100%",
    alignItems: "center",
  },
  button: {
    width: "80%",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 8,
  },
  increment: {
    backgroundColor: "#007bff",
  },
  decrement: {
    backgroundColor: "#ffc107",
  },
  reset: {
    backgroundColor: "#dc3545",
  },
  navGroup: {
    marginTop: 20,
    alignItems: "center",
  },
  navButton: {
    width: "80%",
    padding: 15,
    borderRadius: 8,
    marginVertical: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
