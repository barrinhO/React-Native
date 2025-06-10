import { StyleSheet, View, Text } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>My App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#4CAF50",
    padding: 20,
    alignItems: "center",
    width: "100%",
  },

  headerText: {
    color: "#fff",
    fontSize: 50,
    fontWeight: "bold",
  },
});
