import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {Text, View, StyleSheet} from "react-native";

const Icon = (props) => (
    <View style={styles.container}>
        <View style={styles.iconContainer}>
            <MaterialCommunityIcons name={props.name} size={27} color="#22d4ff"/>
        </View>
        <Text style={styles.iconText}>Icon</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        width: 60,
        height: 60,
    },
    iconContainer: {
        backgroundColor: "#384053",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
    },
    iconText: {
        height: 20,
        fontWeight: "bold",
    },
});

export default Icon;