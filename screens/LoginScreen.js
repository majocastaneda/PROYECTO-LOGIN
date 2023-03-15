import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { loginByUserAndPassword } from "../services/auth";
import Icon from "react-native-vector-icons/FontAwesome";

const LoginScreen = ({}) => {
  const Navigation = useNavigation();

  //Estados Login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [checkValidEmail, setCheckValidEmail] = useState(false);

  const handleLogin = async () => {
    const res = await loginByUserAndPassword(email, password);
    console.log(email);
    console.log(password);
    console.log(res);
    if (res) {
     
      Navigation.navigate("Home");
    
    } else {
     
      ToastAndroid.show("Error de inicio de sesión. Verifique su email o contraseña", ToastAndroid.SHORT);
    }
  };

  //Valida que el email contenga el simbolo @
  const handleCheckEmail = (text) => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setEmail(text.toLowerCase());
    if (re.test(text) || regex.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };

  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bienvenidos</Text>
      <View style={styles.wrapperInput}>
        <TextInput
          placeholder="Email"
          autoCorrect={false}
          value={email}
          onChangeText={(text) => handleCheckEmail(text)}
        />
      </View>
      {checkValidEmail ? (
        <Text style={styles.textoFallido}>Formato de email inválido</Text>
      ) : (
        <Text style={styles.textoFallido}> </Text>
      )}

      <View style={styles.wrapperInput}>
        <TextInput
          placeholder="Contraseña"
          style={styles.userInput}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={hidePassword}
          autoCorrect={false}
        />

        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Icon name={hidePassword ? "eye-slash" : "eye"} size={20} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => Navigation.navigate("Register")}>
        <Text style={styles.buttonText}> Aun no estás registrado? </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleLogin}
        style={{
          backgroundColor: "#574196",
          padding: 15,
          marginTop: "20%",
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
          Ingresar
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />

    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    alignItems: "center",
    justifyContent: "center",
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#574196",
  },

  buttonText: {
    fontWeight: "500",
    color: "#574196",
    margin: 10,
    padding: 10,
    textDecorationLine: "underline",
  },

  wrapperInput: {
    borderBottomWidth: 1,
    width: "80%",
    borderBottomColor: "#574196",
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
    height: 50,
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
