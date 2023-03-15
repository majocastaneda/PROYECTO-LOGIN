import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    ImageBackground,
    TouchableOpacity,
    StyleSheet,
  } from "react-native";
  import React from "react";
  import { MaterialIcons } from "@expo/vector-icons";
  import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
  
  export default function AccountScreen() {

    const Navigation = useNavigation();
  
    const profileImage = {
      uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png?w=826&t=st=1678645625~exp=1678646225~hmac=96592ed0d08daf2920034e4eaf8d777ebe51ae301d54c6805a93462913b560a2",
      //uri: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600",
    };
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#E5E5E5" }}>
        <ScrollView style={{ padding: 30 }}>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-evenly",
              marginTop: 5,
              marginBottom: 2,
              padding: 20,
            }}
            
          >
            <View>
              <Text
                style={{
                  fontSize: 30,
                  marginBottom: 10,
                  
                }}
              >
                Hola
              </Text>
            </View>

            <View>
              <ImageBackground
                source={profileImage}
                style={{ width: 200, height: 200 }}
                imageStyle={{ borderRadius: 100 }}
              />
            </View>
          </View>
            <View style={{

            }}>
                <Text
                style={{
                        width: "100%",
                        borderBottomColor: "#c6c6c6",
                        borderBottomWidth: 2,
                        borderRadius: 1,
                 }}></Text>
            </View>

          <View >
          <TouchableOpacity style={Styles.Botones} onPress={() => Navigation.navigate('EditProfile')}>
        <MaterialIcons name="settings" size={30} color='#574196' />
        <Text style={Styles.textestilo}>
          Configuraciones
        </Text>
      </TouchableOpacity>
      </View>

      <TouchableOpacity style={Styles.Botones} onPress={() => Navigation.navigate('SellerRegister')}>
      <MaterialCommunityIcons name="account-group" size={30} color="#574196" />
        <Text style={Styles.textestilo}>
          Convertirse en proveedor
        </Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={Styles.Botones}
        onPress={() => Navigation.navigate('Bookings')}
      >
        <MaterialCommunityIcons name="calendar-check" size={30} color="#574196" />
        <Text style={Styles.textestilo}>
          Historial de reservaciones
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={Styles.Botones}
        onPress={() => Navigation.navigate('Soporte')}
      >
        <MaterialIcons name="contact-support" size={30} color="#574196" />
        <Text style={Styles.textestilo}>
          Soporte
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={Styles.Botones}
        onPress={() => Navigation.navigate('Acerca')}
      >
        <MaterialCommunityIcons name="dots-horizontal" size={30} color="#574196" />
        <Text style={Styles.textestilo}>
          Acerca de
        </Text>
      </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({

Botones:{
    flexDirection: "row",
    justifyContent: "flex-start",    
    backgroundColor: "#E5E5E5",
    padding: 15,
    width: "80%",
    borderRadius: 10,
},

wrapperButton: {
    flexDirection: "row",
},

textestilo:{
    fontSize: 20,
    textAlign: "left",
    marginLeft: 15
  },
})

