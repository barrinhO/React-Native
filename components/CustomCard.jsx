import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function CustomCard({ title, bgColor, onPress }) {
  return (
    <View style={styles.customCardSection}>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.card, { backgroundColor: bgColor }]}
      >
        <Text style={styles.cardText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  customCardSection: {
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
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 26,
  },
});
