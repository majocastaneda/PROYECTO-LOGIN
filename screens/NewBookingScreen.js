import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { TextInput } from "react-native-gesture-handler";
//import { useNavigation } from '@react-navigation/native';
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { getAllCategories } from "../services/category";
import { Picker } from '@react-native-picker/picker';
import { registerProvider } from "../services/provider";
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome';


const NewBookingScreen = ({}) => {

  
 //Estados de lista de proveedores
const [dataAddress, setDataAddress] = useState([]);
const [ProviderId, setProviderId] = useState("");
const [DayDate, setDayDate] = useState("");
const [Price, setPrice] = useState("");
const [AddressId, setAddressId] = useState("");
const [showDatePicker, setShowDatePicker] = useState(false);

const handleDateSelect = (event, selectedDate) => {
  if (selectedDate) {
    setDayDate(selectedDate);
    setShowDatePicker(false);
  }
};


const showDatepicker = () => {
  setShowDatePicker(true);
};


const handleBooking = async () => {
  try {
    const response = await newBooking(
      ProviderId,
      DayDate,
      Price,
      AddressId,
    );
    // Si todo va bien, se debería recibir la respuesta de la API aquí
    console.log(response);
    Navigation.replace("Bookings");
  } catch (error) {
    // Si algo falla, se captura el error aquí
    console.error(error);
    console.log(ProviderId);
    console.log(AddressId);
  }
};


useEffect(() => {
  doGetAllAddress();
}, []);

const doGetAllAddress = async () => {
  const res = await getAllAddress();
  if (res) {
    setDataAddress(res);
    //console.log(res);
  } else {
    console.log("Error al obtener direcciones");
  }
};

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contrata tu servicio</Text>

      <View style={styles.wrapperInput}>
        <View style={{flexDirection: 'row'}}>
          
          <TextInput
            placeholder="Fecha del servicio"
            style={styles.userInput}
            autoCorrect={false}
            value={DayDate ? DayDate.toLocaleDateString() : ''}
            //onFocus={showDatepicker}
          />
          <TouchableOpacity onPress={showDatepicker}>
            <Icon name="calendar" size={15} color="black" style={{ marginLeft: 150}} />
          </TouchableOpacity>
        </View>
        {showDatePicker && (
          <DateTimePicker
            value={DayDate || new Date()}
            mode="date"
            display="default"
            onChange={handleDateSelect}
          />
        )}
      </View>

      <View style={styles.wrapperDropdown}>
      <Text style={styles.wrapperItemText}>Selecciona una direccion:</Text>
      </View>
      <View style={styles.wrapperDropdown}>
      <Picker
        selectedValue={AddressId}
        onValueChange={(itemValue, itemIndex) => setAddressId(itemValue)}
      >
        {dataAddress.map((item) => (
          <Picker.Item key={item.id} label={item.Name} value={item.id} />
        ))}
      </Picker>
      
    </View>

      <View style={styles.wrapperInput}>
        <TextInput
          placeholder="Precio"
          style={styles.userInput}
          autoCorrect={false}
          onChangeText={(text) => setPrice(text)}
          TextInputConfig={{
            multiline: true,
          }}
        />
      </View>

      <TouchableOpacity
        onPress={handleBooking}
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
          Contratar el servicio
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

export default NewBookingScreen;

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

  datePicker: {
    backgroundColor: "#574196", // Color de fondo
    color: "#ffffff", // Color del texto
    borderWidth: 1, // Agrega un borde para verificar que el estilo se está aplicando
  borderColor: "red",
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
});
