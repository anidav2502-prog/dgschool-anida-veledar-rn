import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const Home = ({ navigation }) => (
  <View>
    <Text>Welcome to Home Screen</Text>
    <Button title="Go to About" onPress={() => navigation.navigate("About")} />
    <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
  </View>
);

const styles = StyleSheet.create({});

export default Home;