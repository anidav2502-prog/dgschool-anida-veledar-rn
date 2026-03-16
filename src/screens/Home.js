import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Home = ({navigation}) => (
    <View>
        <Text>Welcome home</Text>
        <Button title="Go to About" onPress={()=>navigation.navigate("About")}/>
    </View>
);

const styles = StyleSheet.create({
    
});

export default Home;
