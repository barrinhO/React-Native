import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de perfil</Text>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#17a2b8" }]}
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
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    width: "80%",
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    alignSelf: "center",
    alignItems: "center",
  },
  infoButton: {
    backgroundColor: "#17a2b8", // azul claro
  },
  successButton: {
    backgroundColor: "#28a745", // verde
  },
  warningButton: {
    backgroundColor: "#ffc107", // amarelo
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
