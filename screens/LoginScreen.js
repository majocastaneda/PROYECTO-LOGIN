import { Button, StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { loginByUserAndPassword } from '../services/auth';

const LoginScreen = ({}) => {

    const Navigation = useNavigation();

    //Estados Login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [seePassword, setSeePassword] = useState(true);
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);

  const handleLogin = async () => {
    const res = await loginByUserAndPassword(email, password);
    console.log(email);
    console.log(password);
    console.log(res);
    if (res) {
      setIsSuccessModalVisible(true);
      Navigation.replace('Home');
    } else {
      console.log('Sin Datos');
    }
  };

  const handleCheckEmail = text => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
    
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
      autoCorrect={false} secureTextEntry={true} />
      </View>


      <TouchableOpacity>
          <Text style={styles.buttonText}>Olvidaste tu Contraseña?</Text>
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
      <Modal
        visible={isSuccessModalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setIsSuccessModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>¡Login exitoso!</Text>
            <Button title="OK" onPress={() => setIsSuccessModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

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
  
    buttonText:{
      fontWeight: '500',
      color:"#FAD02C",
      margin: 10,
      padding: 10
  
  },
  
  wrapperInput:{
    borderBottomWidth: 1,
    width: "80%",
    borderBottomColor: "#574196",
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
    height: 50,
  },
  
  textoFallido:{
      alignSelf: 'flex-end',
      color: '#F10D0D',
      marginRight: 50,
      marginTop: 5,
  },
  
  });