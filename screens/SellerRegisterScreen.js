import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler';
//import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SelectList } from 'react-native-dropdown-select-list';
import { useNavigation } from '@react-navigation/native';

const SellerRegisterScreen = ({}) => {

const Navigation = useNavigation();
const [selected, setSelected] = useState("");

const data = [
    {key:'1',value:'Prueba1'},
    {key:'2',value:'Prueba2'},
    {key:'3',value:'Prueba3'},
    {key:'4',value:'Prueba4'},
    {key:'5',value:'Prueba5'},
    {key:'6',value:'Prueba6'},
    {key:'7',value:'Prueba7'},
    
];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Registro de servicio</Text>
      
      <View style={styles.wrapperInput}>
      <TextInput placeholder="Como se llama tu negocio o emprendimiento?" style={styles.userInput} autoCorrect={false} />
      </View>

      <View style={styles.wrapperInput}>
      <TextInput placeholder="Selecciona una industria" style={styles.userInput} autoCorrect={false} />
      </View>

      <View style={styles.wrapperList}>
      <SelectList data={data} setSelected={setSelected}></SelectList>
      </View>

      <View style={styles.wrapperInput}>
      <TextInput placeholder="Direccion" style={styles.userInput} autoCorrect={false} />
      </View>

      <View style={styles.wrapperInput}>
      <TextInput 
      placeholder="Descripcion" 
      style={styles.userInput} 
      autoCorrect={false} 
      TextInputConfig={{
        multiline: true,
      }}
      
      />
      </View>


      <TouchableOpacity
        onPress={() => Navigation.replace('SellerHome')}
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
}

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
  
    buttonText:{
      fontWeight: '500',
      color:"#525050",
      margin: 10,
      padding: 10
  
  },
  
  wrapperInput:{
    borderBottomWidth: 1,
    width: "80%",
    borderBottomColor: "#574196",
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    height: 40,
  },

  wrapperList:{
    margin: 10,
    width: "80%",
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    height: 40,
  },
  
  textoFallido:{
      alignSelf: 'flex-end',
      color: '#F10D0D',
      marginRight: 50,
      marginTop: 5,
  },
  
  });