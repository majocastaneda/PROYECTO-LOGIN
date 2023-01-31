import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const image = {
    uri: "https://images.pexels.com/photos/3930091/pexels-photo-3930091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  };
  
  const Navigation = useNavigation();

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.logo}
        source={{ uri: "https://i.imgur.com/UPSlv16.png" }}
      />
      
      <View style={styles.buttonContainer}>
        
          <TouchableOpacity 
          onPress={() => Navigation.navigate("Register")}
          style={styles.button1}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={() => Navigation.navigate("Login")}
          style={styles.button2}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "",
    alignItems: "center",
    justifyContent: "center",
  },

  titulo: {
    fontSize: 30,
    color: "white",
    alignItems: "flex-start",
  },

  logo: {
    width: 250,
    height: 100,
    padding: 15,
    alignContent: "center",
  },

  buttonText:{
      fontWeight: '500',
      color:"#ffffff"
  },
  
  button1:{
    flex: 1,
    alignItems: 'center',
    padding: 16,

  },

  button2:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff70',
    padding: 16,
    borderRadius: 10,
  },

  buttonContainer:{
    flexDirection: 'row',
    width: '90%',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 16,
    backgroundColor: '#574196',
    marginTop: 450,
  }

});