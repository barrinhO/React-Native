import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Alert } from "react-native";
import CustomCard from "./components/CustomCard";
import Card from "./components/Card";
import Header from "./components/Header";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen"; // Import your DetailsScreen component

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
