import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function DetailScreen({ navigation, route }) {
  const { item } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes do item</Text>
      {item ? (
        <>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemDescription}>{item.description}</Text>
        </>
      ) : (
        <Text style={styles.message}>Nenhum item selecionado.</Text>
      )}

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
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  itemDescription: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
  },
  message: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
