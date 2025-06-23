import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import { useState, useEffect } from "react";
import { TextInput } from "react-native-gesture-handler";

export default function FormScreen({ navigation }) {
  const [name, setName] = useState("");

  useEffect(() => {
    if (name.trim().length === 0) return;

    const timeout = setTimeout(() => {
      Alert.alert("Entrada", `Você digitou: ${name}`);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [name]);

  const handleSubmit = () => {
    if (name.trim() !== "") {
      navigation.navigate("Details", { mensagem: `Nome submetido: ${name}` });
    } else {
      Alert.alert("Erro", "O campo nome não pode estar vazio!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulário</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={name}
        onChangeText={setName}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#ff0000" }]}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Voltar para home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#ff0000" }]}
        onPress={() => navigation.navigate("Scroll")}
      >
        <Text style={styles.buttonText}>Voltar para Scroll</Text>
      </TouchableOpacity>
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
  input: {
    width: "80%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
