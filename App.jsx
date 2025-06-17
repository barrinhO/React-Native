import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ScrollScreen from "./screens/ScrollScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={styles.HomeScreen}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={styles.DetailsScreen}
        />

        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={styles.ProfileScreen}
        />

        <Stack.Screen
          name="Scroll"
          component={ScrollScreen}
          options={{
            title: "ScrollView",
            headerStyle: { backgroundColor: "#28a745" },
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  HomeScreen: {
    title: "Home - FlatList",
    headerStyle: { backgroundColor: "#007bff" },
    headerTintColor: "#fff",
  },
  DetailsScreen: {
    title: "Detalhes",
    headerStyle: { backgroundColor: "#28a745" },
    headerTintColor: "#fff",
  },
  ProfileScreen: {
    title: "Perfil",
    headerStyle: { backgroundColor: "#6c757d" },
    headerTintColor: "#fff",
  },
});
