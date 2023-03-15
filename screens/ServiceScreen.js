import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import MySwiper from "../components/Carousel";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { getAllProviders } from "../services/providerList";
import { FlatList } from 'react-native';
import { Card } from 'react-native-elements';


export default function HomeScreen() {
  //Estados de lista de proveedores
  const [providers, setProviders] = useState([]);
  const Navigation = useNavigation();

  useEffect(() => {
    doGetAllProviders();
  }, []);

  const doGetAllProviders = async () => {
    const res = await getAllProviders();
    if (res) {
      setProviders(res);
      //console.log(res);
    } else {
      console.log("Error al obtener proveedores");
    }
  };



  const renderProviderCard = ({ item }) => {

    const handleCardPress = () => {
      Navigation.navigate('NewBooking', { providerId: item.userId });
    };

    return (
      <TouchableOpacity onPress={handleCardPress}>
      <Card>
        <Card.Image source={ profileImage } style={{ width: '100%', height: 200 }} />
        <Card.Title>{item.servName}</Card.Title>
        <Text>{item.description}</Text>
        
        
      </Card>
      </TouchableOpacity>
    );
  };

  const profileImage = {
    uri: "https://pladufel.com/wp-content/uploads/2018/03/pladufel-pladur-y-reformas-integrales-servicios-varios-2.jpg"
    //uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png?w=826&t=st=1678645625~exp=1678646225~hmac=96592ed0d08daf2920034e4eaf8d777ebe51ae301d54c6805a93462913b560a2",
    //uri: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600",
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#E5E5E5" }}>
    <FlatList
      style={{ padding: 25 }}
      data={providers}
      renderItem={renderProviderCard}
      keyExtractor={(item) => item.id.toString()}
      ListHeaderComponent={
        <>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5,
              marginBottom: 20,
            }}
          >
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                paddingTop: 5,
              }}
            >
              Top de servicios
            </Text>
          </View>
  
          <View>
            <Text
              style={{
                fontSize: 20,
                paddingTop: 10,
                paddingBottom: 10,
              }}
            >
              Encuentra el servicio para ti
            </Text>
          </View>
        </>
        
      }
      ListFooterComponent={
        <TouchableOpacity style={{ marginTop: 20 }}>
          <Text style={{ color: "#574196", fontSize: 14 }}>
            Cargar más
          </Text>
        </TouchableOpacity>
      }
    />
  </SafeAreaView>
  );
}
