import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AboutStackNavigator, MainStackNavigator, IosStackNavigator, AndroidStackNavigator } from "./StackNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#384053",
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "lightgray",
        tabBarLabelStyle: {
          fontSize: 12,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={MainStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Ios"
        component={IosStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="apple" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Android"
        component={AndroidStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="android" size={26} color={color} />
          ),
        }}
      />
    </Tab.Navigator>


  );
};

export default BottomTabNavigator;