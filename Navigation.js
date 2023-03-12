import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import AccountScreen from "./screens/AccountScreen";
import ServiceScreen from "./screens/ServiceScreen";
import BookingScreen from "./screens/BookingScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SellerRegisterScreen from "./screens/SellerRegisterScreen";
import SellerHomeScreen from "./screens/SellerHomeScreen";
import EditProfileScreen from "./screens/EditProfileScreen";
import AddressScreen from "./screens/AddressScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#574196",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
         tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={30} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Servicios"
        component={ServiceScreen}
        options={{
          tabBarLabel: "Top Services",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="star" size={30} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Bookings"
        component={BookingScreen}
        options={{
          tabBarLabel: "Bookings",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="calendar-heart"
              size={30}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" size={30} color={color} />
          ),
          headerShown: false,
        }}
      />
        </Tab.Navigator>
    );
}

const Navigation =() => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
                name="Home" 
                component={MyTabs}
                options={{
                    headerShown: false,
                  }} />
             <Stack.Screen 
                name="Welcome" 
                component={WelcomeScreen} 
                options={{
                    headerShown: false,
                  }}
                />
              <Stack.Screen 
                name="Login" 
                component={LoginScreen} 
                options={{
                    headerShown: false,
                  }}
                />
              <Stack.Screen 
                name="Register" 
                component={RegisterScreen} 
                options={{
                    headerShown: false,
                  }}/>
              <Stack.Screen 
                name="SellerRegister" 
                component={SellerRegisterScreen}
                options={{
                    headerShown: false,
                  }} />
                <Stack.Screen 
                name="SellerHome" 
                component={SellerHomeScreen}
                options={{
                    headerShown: false,
                  }} />
                <Stack.Screen 
                name="EditProfile" 
                component={EditProfileScreen}
                options={{
                    headerShown: false,
                  }} />
                <Stack.Screen 
                name="CurrentAddress" 
                component={AddressScreen}
                options={{
                    headerShown: false,
                  }} />
            </Stack.Navigator>
        </NavigationContainer>

    );
};

export default Navigation;