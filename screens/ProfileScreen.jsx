import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de perfil</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Voltar para Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#34C759" }]}
        onPress={() =>
          navigation.navigate("Details", { message: "Olá, do perfil!" })
        }
      >
        <Text style={styles.buttonText}>Ir para Detalhes</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#007bff" }]}
        onPress={() => navigation.navigate("Scroll")}
      >
        <Text style={styles.buttonText}>Ir para ScrollView</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#007bff" }]}
        onPress={() => navigation.navigate("Form")}
      >
        <Text style={styles.buttonText}>Ir para Formulário</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
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
