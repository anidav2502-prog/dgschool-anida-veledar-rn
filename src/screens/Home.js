import React from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";
import Swiper from "react-native-swiper";

const Home = ({ navigation }) => (
  <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <Swiper
          autoplay
          autoplayTimeout={5}
          activeDotColor="#22d4ff">
            <View style={styles.item}>
              <Image
                source={require("../../assets/img1.png")}
                style={styles.imgItem}
                resizeMode="cover"
              />
            </View>
            <View style={styles.item}>
              <Image
                source={require("../../assets/img2.png")}
                style={styles.imgItem}
                resizeMode="cover"
              />
            </View>
            <View style={styles.item}>
              <Image
                source={require("../../assets/img3.png")}
                style={styles.imgItem}
                resizeMode="cover"
              />
            </View>
        </Swiper>
      </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#fff",
  },

  sliderContainer: {
    width: "90%",
    height: 200,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 10,
    borderRadius: 8,
  },

  item: {
    flex: 1,
    justifyContent: 'center',
  },

  imgItem: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
});

export default Home;