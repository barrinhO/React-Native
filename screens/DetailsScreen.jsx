import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

export default function DetailScreen({ navigation, route }) {
  const { mensagem, nome, idade, curso, imagem } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes da Pessoa</Text>

      <Image
        style={styles.profileImage}
        source={imagem || require("../assets/image.png")}
      />

      <Text style={styles.name}>{nome || "Nome não informado"}</Text>
      <Text style={styles.info}>Idade: {idade || "Não informada"}</Text>
      <Text style={styles.info}>Curso: {curso || "Não informado"}</Text>

      {mensagem && <Text style={styles.mensagem}>“{mensagem}”</Text>}

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "600",
    marginBottom: 20,
    color: "#333",
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 65,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#222",
  },
  info: {
    fontSize: 18,
    marginBottom: 4,
    color: "#555",
  },
  mensagem: {
    marginTop: 20,
    fontSize: 16,
    fontStyle: "italic",
    textAlign: "center",
    color: "#666",
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
