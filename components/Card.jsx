import { View, Text, StyleSheet } from "react-native";

export default function Card() {
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>This is a card</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "red",
    padding: 15,
    borderRadius: 10,
  },

  cardText: {
    color: "#fff",
    fontSize: 16,
  },
});
