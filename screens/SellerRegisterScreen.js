import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { TextInput } from "react-native-gesture-handler";
//import { useNavigation } from '@react-navigation/native';
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { getAllCategories } from "../services/category";
import { Picker } from '@react-native-picker/picker';
import { registerProvider } from "../services/provider";

const SellerRegisterScreen = ({}) => {
  const Navigation = useNavigation();
  const [dataCategory, setDataCategory] = useState([]);
  const [ServName, setServName] = useState("");
  const [Description, setDescription] = useState("");
  const [CategoryId, setCategoryId] = useState("");
  const [message, setMessage] = useState("");

  const handleSellerRegister = async () => {
    try {
      const response = await registerProvider(
        ServName,
    Description,
    CategoryId,
      );
      // Si todo va bien, se debería recibir la respuesta de la API aquí
      console.log(response);
      Navigation.replace("SellerHome");
    } catch (error) {
      // Si algo falla, se captura el error aquí
      console.error(error);
      console.log(categoryId);
    }
  };

  useEffect(() => {
    doGetAllCategories();
  }, []);

  const doGetAllCategories = async () => {
    const res = await getAllCategories();
    if (res) {
      setDataCategory(res);
      //console.log(res);
    } else {
      console.log("Error al obtener categorias");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Registro de servicio</Text>

      <View style={styles.wrapperInput}>
        <TextInput
          placeholder="Como se llama tu negocio o emprendimiento?"
          style={styles.userInput}
          autoCorrect={false}
          onChangeText={(text) => setServName(text)}
        />
      </View>

      <View style={styles.wrapperDropdown}>
      <Text style={styles.wrapperItemText}>Selecciona una categoría:</Text>
      </View>
      <View style={styles.wrapperDropdown}>
      <Picker
        selectedValue={CategoryId}
        onValueChange={(itemValue, itemIndex) => setCategoryId(itemValue)}
      >
        {dataCategory.map((item) => (
          <Picker.Item key={item.id} label={item.serviceName} value={item.id} />
        ))}
      </Picker>
      
    </View>

      <View style={styles.wrapperInput}>
        <TextInput
          placeholder="Descripcion"
          style={styles.userInput}
          autoCorrect={false}
          onChangeText={(text) => setDescription(text)}
          multiline={true}
          numberOfLines={5}
        />
      </View>

      <TouchableOpacity
        onPress={handleSellerRegister}
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
          Registrarme como proveedor
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

export default SellerRegisterScreen;

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
    color: "#525050",
    margin: 10,
    padding: 10,
  },

  wrapperInput: {
    borderBottomWidth: 1,
    width: "80%",
    borderBottomColor: "#574196",
    marginTop: 40,
    padding: 10,
    borderRadius: 10,
    height: 40,
  },

  wrapperDropdown: {
    width: "80%",
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    height: 40,
  },

  wrapperItemText: {
    fontWeight: "500",
    width: "100%",
    marginTop: 10,
    height: 20,
    color: "#574196",
  },


  Texto: {
    fontWeight: "100",
    color: "#574196",
    margin: 10,
    padding: 10,
  },

  wrapperList: {
    margin: 10,
    width: "80%",
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#dda0dd",
    color: "#574196"
  },

  textoFallido: {
    alignSelf: "flex-end",
    color: "#F10D0D",
    marginRight: 50,
    marginTop: 5,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
});
