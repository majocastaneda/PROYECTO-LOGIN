import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import AccountScreen from "./screens/AccountScreen";
import SellerAccountScreen from "./screens/SellerAccountScreen";
import ServiceScreen from "./screens/ServiceScreen";
import BookingScreen from "./screens/BookingScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SellerRegisterScreen from "./screens/SellerRegisterScreen";
import SellerHomeScreen from "./screens/SellerHomeScreen";
import EditProfileScreen from "./screens/EditProfileScreen";
import AddressScreen from "./screens/AddressScreen";
import NewBookingScreen from "./screens/NewBookingScreen";
import NewAddress from "./screens/NewAddress";
import AboutScreen from "./screens/AboutScreen";
import SupportScreen from "./screens/SupportScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyTabs = ({ token }) => {


    return (
      <Tab.Navigator
    screenOptions={{
      style: {
        height: 80,
        backgroundColor: '#fff',
      },
      tabBarActiveTintColor: "#574196",
    }}
  >
      <Tab.Screen
        name="userHomeTab"
        component={HomeScreen}
        initialParams={{ token }} // pasa el token como prop
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
        initialParams={{ token }} // pasa el token como prop
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
        initialParams={{ token }} // pasa el token como prop
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
        initialParams={{ token }} // pasa el token como prop
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

const SellerTabs = ({ token }) => {


  return (
    <Tab.Navigator
    screenOptions={{
      style: {
        height: 80,
        backgroundColor: '#fff',
      },
      tabBarActiveTintColor: "#574196",
    }}
  >
    <Tab.Screen
      name="SellerHomeTab"
      component={SellerHomeScreen}
      //initialParams={{ token }} // pasa el token como prop
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
      //initialParams={{ token }} // pasa el token como prop
      options={{
        tabBarLabel: "Requests",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="star" size={30} color={color} />
        ),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Bookings"
      component={BookingScreen}
      //initialParams={{ token }} // pasa el token como prop
      options={{
        tabBarLabel: "Calendar",
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
      name="SellerAccount"
      component={SellerAccountScreen}
      //initialParams={{ token }} // pasa el token como prop
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
            <Stack.Navigator initialRouteName="Login">
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
                name="Home" 
                component={MyTabs}
                options={{
                    headerShown: false,
                  }} />
              <Stack.Screen 
                name="SellerRegister" 
                component={SellerRegisterScreen}
                options={{
                    headerShown: false,
                  }} />
                <Stack.Screen 
                name="SellerHome" 
                component={SellerTabs}
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
                name="NewAddress" 
                component={NewAddress}
                options={{
                    headerShown: false,
                  }} />
                <Stack.Screen 
                name="CurrentAddress" 
                component={AddressScreen}
                options={{
                    headerShown: false,
                  }} />
                <Stack.Screen 
                name="NewBooking" 
                component={NewBookingScreen}
                options={{
                    headerShown: false,
                  }} />
                <Stack.Screen 
                name="Soporte" 
                component={SupportScreen}
                options={{
                    headerShown: false,
                  }} />
                <Stack.Screen 
                name="Acerca" 
                component={AboutScreen}
                options={{
                    headerShown: false,
                  }} />
            </Stack.Navigator>
        </NavigationContainer>

    );
};

export default Navigation;