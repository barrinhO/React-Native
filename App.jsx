import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

import Card from "./components/Card";
import Header from "./components/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />

      <View style={styles.contentCenter}>
        <Image
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
          style={styles.image}
        />

        <Text style={styles.centerMessage}>Hello, welcome to React Native</Text>
      </View>

      <View>
        <Card style={styles.card1} text={"This is a card"} />
        <Card style={styles.card2} text={"This is another card"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },

  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },

  contentCenter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  centerMessage: {
    color: "#000",
    fontSize: 30,
    textAlign: "center",
    marginTop: 10,
    fontWeight: "bold",
  },
});
