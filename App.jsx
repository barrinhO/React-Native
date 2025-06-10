import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Alert } from "react-native";
import CustomCard from "./components/CustomCard";
import Card from "./components/Card";
import Header from "./components/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Header />

      <View style={styles.contentCenter}>
        <Image source={require("./assets/mup.png")} style={styles.image} />

        <Text style={styles.centerMessage}>Hello, welcome to React Native</Text>
      </View>

      <View>
        <Card style={styles.card1} text={"Card 1"} />
        <Card style={styles.card2} text={"Card 2"} />
        <CustomCard
          title={"Custom Card - 1"}
          bgColor={"red"}
          onPress={() => Alert.alert("Custom Card - 1 CLICKED")}
        />
        <CustomCard
          title={"Custom Card - 2"}
          bgColor={"blue"}
          onPress={() => Alert.alert("Custom Card - 2 CLICKED")}
        />
        <CustomCard
          title={"Custom Card - 3"}
          bgColor={"green"}
          onPress={() => Alert.alert("Custom Card - 3 CLICKED")}
        />
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
    borderRadius: 5,
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
