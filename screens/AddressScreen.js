import { StyleSheet, Text, TouchableOpacity, View, Button, ToastAndroid, } from "react-native";
import React, { useEffect, useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { registerAddress } from "../services/address";

export default function AddressScreen() {
  const Navigation = useNavigation();

  //Estados
  const [name, setName] = useState("");
  const [main, setMain] = useState("");
  const [secondary, setSecondary] = useState("");
  const [city, setCity] = useState("");

  const handleRegisterAddress = async () => {
    try {

      if (!name || !main || !secondary || !city) {
        // Si algún campo está vacío, muestra un mensaje de error y no continúa
        ToastAndroid.show("Por favor completa todos los campos", ToastAndroid.SHORT);
        return;
      }

      const response = await registerAddress(name, main, secondary, city);
      // Si todo va bien, se debería recibir la respuesta de la API aquí
      console.log(response);
      Navigation.replace("Home");
      ToastAndroid.show("Dirección guardada correctamente", ToastAndroid.SHORT);
    } catch (error) {
      // Si algo falla, se captura el error aquí
      console.error(error);
      console.log(name);
    }
  };

  

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Ingresa la dirección donde recibirás el servicio
      </Text>

      <View style={styles.wrapperInput}>
        <TextInput
          placeholder="Nombre"
          style={styles.userInput}
          autoCorrect={false}
          onChangeText={(text) => setName(text)}
          required={true}
        />
      </View>

      <View style={styles.wrapperInput}>
        <TextInput
          placeholder="Calle principal"
          style={styles.userInput}
          autoCorrect={false}
          onChangeText={(text) => setMain(text)}
          required={true}
        />
      </View>

      <View style={styles.wrapperInput}>
        <TextInput
          placeholder="Calle secundaria"
          style={styles.userInput}
          autoCorrect={false}
          onChangeText={(text) => setSecondary(text)}
          required={true}
        />
      </View>

      <View style={styles.wrapperInput}>
        <TextInput
          placeholder="Ciudad"
          style={styles.userInput}
          autoCorrect={false}
          onChangeText={(text) => setCity(text)}
          required={true}
        />
      </View>

      <TouchableOpacity
        onPress={handleRegisterAddress}
        style={{
          backgroundColor: "#574196",
          padding: 15,
          marginTop: "10%",
          width: "80%",
          alignSelf: "center",
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            textAlign: "center",
            color: "white",
          }}
        >
          Guardar nueva dirección
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    alignItems: "center",
    justifyContent: "center",
  },

  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#574196",
    textAlign: "center",
    textAlignVertical: "center",
  },

  buttonText: {
    fontWeight: "500",
    color: "#525050",
    margin: 10,
    padding: 10,
    fontWeight: "500",
    color: "#574196",
    textDecorationLine: "underline",
  },

  wrapperInput: {
    borderBottomWidth: 1,
    width: "80%",
    borderBottomColor: "#574196",
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  textoFallido: {
    alignSelf: "flex-end",
    color: "#F10D0D",
    marginRight: 50,
    marginTop: 5,
  },
});
