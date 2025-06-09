import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  function Saudacao() {
    return <Text>Hello, this is a component</Text>;
  }

  return (
    <View style={styles.container}>
      <Text>Eu espero que você tome no meio do seu cu!</Text>
      <Saudacao />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
});
