import { Text, StyleSheet, Alert, TouchableOpacity, View } from "react-native";

export default function Card({ text }) {
  return (
    <View style={styles.cardSection}>
      <TouchableOpacity
        onPress={() => Alert.alert(`You pressed the card \n${text}`)}
        style={styles.card}
      >
        <Text style={styles.cardText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cardSection: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 25,
  },
  card: {
    backgroundColor: "#eee",
    padding: 15,
    borderRadius: 10,
    width: 390,
    borderColor: "ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  cardText: {
    textAlign: "start",
    color: "#000",
    fontWeight: "bold",
    fontSize: 26,
  },
});
