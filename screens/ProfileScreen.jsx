import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.profileImage}
        source={require("../assets/image.png")}
      />
      <Text style={styles.name}>Christian Moreira</Text>
      <Text style={styles.info}>Idade: 16 anos</Text>
      <Text style={styles.info}>Curso: Desenvolvimento de Sistemas</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Voltar para Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.secondaryButton]}
          onPress={() =>
            navigation.navigate("Details", {
              nome: "Christian Moreira",
              idade: "16 anos",
              curso: "Desenvolvimento de Sistemas",
              mensagem: "Estudando para ser um ótimo desenvolvedor!",
              imagem: require("../assets/image.png"),
            })
          }
        >
          <Text style={styles.buttonText}>Ir para Detalhes</Text>
        </TouchableOpacity>
      </View>
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
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#222",
  },
  info: {
    fontSize: 18,
    marginBottom: 5,
    color: "#333",
  },
  buttonContainer: {
    marginTop: 40,
    width: "100%",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
  },
  secondaryButton: {
    backgroundColor: "#34C759", // um verde para destacar da navegação
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
