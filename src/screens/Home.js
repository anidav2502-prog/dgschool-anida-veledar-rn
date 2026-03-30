import React from "react";
import { Text, View, StyleSheet, Button, Image, TouchableOpacity, FlatList, ScrollView } from "react-native";
import Swiper from "react-native-swiper";
import Icon from "../components/icon";
import data from '../data/products.json';
import Item from "../components/item";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.setState({
      products: data,
    });
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.sliderContainer}>
            <Swiper
              autoplay
              autoplayTimeout={5}
              activeDotColor="#22D4FF"
              showsButtons={true}
            >
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

          <View style={styles.iconsContainer}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Ios")}><Icon name="cellphone" iconText="iPhone" /></TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Android")}><Icon name="android" iconText="Android" /></TouchableOpacity>
            <Icon name="laptop" iconText="Laptop" />
          </View>

          <View style={styles.iconsContainer}>
            <Icon name="tablet" iconText="Tablet" />
            <Icon name="mouse" iconText="Mouse" />
            <Icon name="keyboard" iconText="Keyboard" />
          </View>

          <View style={styles.productsContainer}>
            <Text style={styles.title}>Most popular products</Text>
            <FlatList
              data={this.state.products.popularproducts}
              renderItem={({ item }) => (
                <View>
                  <Item item={item} />
                </View>
              )}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

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

  container2: {
    backgroundColor: 'pink',
    marginTop: 10,
    padding: 10,
    height: 100,
    width: '100%',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  container3: {
    backgroundColor: 'green',
    marginTop: 10,
    padding: 10,
    height: 100,
    width: '100%',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  container4: {
    backgroundColor: 'yellow',
    marginTop: 10,
    padding: 10,
    height: 100,
    width: '100%',
    fontStyle: 'italic',
    textAlign: 'center',
  },

  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    alignSelf: "center",
    marginTop: 30,
  },

  productsContainer: {
    marginHorizontal: 20,
  },

  title: {
    marginTop: 35,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16
  },
});

export default Home;