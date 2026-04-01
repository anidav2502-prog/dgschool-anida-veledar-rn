import React from "react";
import { StyleSheet, Text, View } from "react-native/";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Rating = ({rating})=>{
    const stars = [];

    for (let i=1; i<=5; i++) {
        let name = "star-outline";
        if (i<=rating){
            name="star";
        }else if (i== Math.ceil(rating) && !Number.isInteger(rating)) {
            name="star-half-full";
        }
        stars.push(
            <MaterialCommunityIcons name={name} size={32} color="rgba(219, 247, 12, 0.99)" />
        )
    }

    return (
    <View style={styles.container}>{stars}</View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 5,
    },
});

export default Rating;