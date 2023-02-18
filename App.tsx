import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home/Home";
import PromoDetail from "./screens/PromoDetail/PromoDetail";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderWidth: 1.5,
            borderColor: "#ECEEEF",
            position: "absolute",
          },
          tabBarActiveTintColor: "#1D1E1C",
          tabBarInactiveTintColor: "#BBBBBB",
          tabBarIconStyle: {
            height: 25.73,
            width: 25.73,
          },
        }}
      >
        <Tab.Screen
          name="KEŞFET"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              return focused ? (
                <Image
                  style={{ width: 26, height: 26 }}
                  source={require("./assets/kesfet.png")}
                />
              ) : (
                <Image
                  style={{ width: 26, height: 26, tintColor: "#BBBBBB" }}
                  source={require("./assets/kesfet.png")}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="MENU"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  style={{ width: 69, height: 71 }}
                  source={require("./assets/menu.png")}
                />
              );
            },
            tabBarLabel: "",
          }}
        />
        <Tab.Screen
          name="DAHA CÜZDAN"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              return focused ? (
                <Image
                  style={{ width: 24, height: 22 }}
                  source={require("./assets/star.png")}
                />
              ) : (
                <Image
                  style={{ width: 24, height: 22, tintColor: "#BBBBBB" }}
                  source={require("./assets/star.png")}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="PromoDetail"
          component={PromoDetail}
          options={{
            tabBarLabelStyle: {
              display: "none",
            },
            tabBarItemStyle: {
              display: "none",
            },
            tabBarIconStyle: {
              display: "none",
            },
            tabBarStyle: {
              display: "none",
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
