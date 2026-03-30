import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "../screens/Home";
import About from "../screens/About";
import Ios from '../screens/Ios';
import Android from '../screens/Android';

const Stack = createStackNavigator();

const stackNavigatorStyle = {
  headerStyle: {
    backgroundColor: "#384053",
  },
  headerTintColor: "white",
  headerShown: false,
};

const MainStackNavigator = ({ navigation }) => (
  <Stack.Navigator screenOptions={stackNavigatorStyle}>
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);

const AboutStackNavigator = ({ navigation }) => (
  <Stack.Navigator screenOptions={stackNavigatorStyle}>
    <Stack.Screen name="About" component={About} />
  </Stack.Navigator>
);

const IosStackNavigator = ({ navigation }) => (
  <Stack.Navigator screenOptions={stackNavigatorStyle}>
    <Stack.Screen name="Ios" component={Ios} />
  </Stack.Navigator>
);

const AndroidStackNavigator = ({ navigation }) => (
  <Stack.Navigator screenOptions={stackNavigatorStyle}>
    <Stack.Screen name="Android" component={Android} />
  </Stack.Navigator>
);

export { MainStackNavigator, AboutStackNavigator, IosStackNavigator, AndroidStackNavigator };