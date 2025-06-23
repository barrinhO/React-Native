import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

export default function ScrollScreen({ navigation }) {
  const [clickCount, setClickCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela com ScrollView</Text>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
      >
        {Array.from({ length: 20 }).map((_, index) => (
          <TouchableOpacity
            key={index}
            style={styles.item}
            onPress={() => {
              setClickCount((prevCount) => prevCount + 1);
              navigation.navigate("Details", {
                mensagem: `Item ${index + 1} clicado!`,
              });
            }}
          >
            <Text style={styles.itemText}>Item {index + 1}</Text>
          </TouchableOpacity>
        ))}

        <Text style={styles.counterText}>Itens clicados: {clickCount}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Voltar para Home</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  item: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  itemText: {
    fontSize: 18,
  },
  counterText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
    marginBottom: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#007BFF",
    borderRadius: 5,
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
