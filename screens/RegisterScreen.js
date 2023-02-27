import { Button, StyleSheet, Text, TouchableOpacity, View, Picker } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { registerUser } from '../services/user';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome';


const LoginScreen = ({ }) => {

  const Navigation = useNavigation();

  //Estados Login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [seePassword, setSeePassword] = useState(true);
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [identification, setIdentification] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);


  
  const handleDateSelect = (event, selectedDate) => {
    if (selectedDate) {
      setBirthDate(selectedDate);
      setShowDatePicker(false);
    }
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const handleRegisterUser = async () => {
    try {


      const response = await registerUser(

        name,
        lastname,
        email,
        password,
        identification,
        phone,
        gender,
        birthDate,
      );

      // Si todo va bien, se debería recibir la respuesta de la API aquí
      console.log(response);
    } catch (error) {
      // Si algo falla, se captura el error aquí
      console.error(error);
      console.log(email);
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
      <Text style={styles.titulo}>Empezemos creando tu cuenta</Text>

      <View style={styles.wrapperInput}>
        <TextInput
          placeholder="Nombre"
          style={styles.userInput}
          autoCorrect={false}
          onChangeText={(text) => setName(text)}
        />
      </View>

      <View style={styles.wrapperInput}>
        <TextInput
          placeholder="Apellido"
          style={styles.userInput}
          autoCorrect={false}
          onChangeText={(text) => setLastname(text)}
        />
      </View>

      <View style={styles.wrapperInput}>
        <TextInput
          placeholder="Email"
          autoCorrect={false}
          value={email}
          onChangeText={(text) => handleCheckEmail(text)}
        />
        {checkValidEmail ? (
          <Text style={styles.textoFallido}>Formato de email inválido</Text>
        ) : (
          <Text style={styles.textoFallido}> </Text>
        )}
      </View>

      <View style={styles.wrapperInput}>
        <TextInput
          placeholder="Contraseña"
          style={styles.userInput}
          autoCorrect={false}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <View style={styles.wrapperInput}>
        <TextInput
          placeholder="Phone"
          style={styles.userInput}
          autoCorrect={false}
          onChangeText={(text) => setPhone(text)}
        />
      </View>

      <View style={styles.wrapperInput}>
        <TextInput
          placeholder="Identification"
          style={styles.userInput}
          autoCorrect={false}
          onChangeText={(text) => setIdentification(text)}
        />
      </View>



      <View style={styles.wrapperInput}>
        <TextInput
          placeholder="Genero"
          style={styles.userInput}
          autoCorrect={false}
          onChangeText={(text) => setGender(text)}
        />
      </View>

      <View style={styles.wrapperInput}>
        <View style={{flexDirection: 'row'}}>
          
          <TextInput
            placeholder="Fecha de Nacimiento"
            style={styles.userInput}
            autoCorrect={false}
            value={birthDate ? birthDate.toLocaleDateString() : ''}
            //onFocus={showDatepicker}
          />
          <TouchableOpacity onPress={showDatepicker}>
            <Icon name="calendar" size={15} color="black" style={{ marginLeft: 150}} />
          </TouchableOpacity>
        </View>
        {showDatePicker && (
          <DateTimePicker
            value={birthDate || new Date()}
            mode="date"
            display="default"
            onChange={handleDateSelect}
            textColor="blue"
          />
        )}
      </View>

      <TouchableOpacity onPress={() => Navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Ya estoy registrado</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleRegisterUser}
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
          Registrarme
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
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

  buttonText: {
    fontWeight: '500',
    color: "#525050",
    margin: 10,
    padding: 10

  },

  wrapperInput: {
    borderBottomWidth: 1,
    width: "80%",
    borderBottomColor: "#574196",
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    height: 40,
  },

  textoFallido: {
    alignSelf: 'flex-end',
    color: '#F10D0D',
    marginRight: 50,
    marginTop: 5,
  },


});