import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";

const Item = ({item}) => (
    <View style={styles.cardContainer}>
        <View style={styles.imgContainer}>
            <Image source={{uri: `${item.image}`}} resizeMode="cover" style={styles.img}/>
        </View>
        <View>
            <Text style={styles.TextContainer}>{item.name}</Text>
            <Text style={styles.name}>{item.category}</Text>
            <Text style={StyleSheet.category}>{item.description}</Text>
            <Text style={styles.price}>{item.price}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    cardContainer: {
        width: "100%",
        heigt: 130,
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 8,
        marginBottom: 16,
    },
    img: {
        width: 100,
        height: "90%",
        resizeMode: "cover",
        borderRadius: 8,
        marginTop: 5,
    },
    textContainer: {
        paddingHorizontal: 10,
        marginVertical: 10,
        width: "70%",
    },
    name: {
        fontSize: 16,
        fintWeight: "bold",
    },
    category: {
        fontSize: 12,
        color: "#22d4ff",
    },
    desc: {
        fontStyle: "italic",
    },

    price: {
        fontWeight: "bold",
        backgroundColor: "#384053",
        marginTop: 5,
        color: "white",
        borderRadius: 100,
        paddingHorizontal: 5,
        width: 45,
    },
});

export default Item;