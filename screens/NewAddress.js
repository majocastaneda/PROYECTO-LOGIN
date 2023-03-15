import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Card } from "react-native-elements";
import { getAllAddress } from "../services/addressList";

export default function NewAddress() {
  //Estados de lista de direcciones
  const [addressList, setAddressList] = useState([]);
  const Navigation = useNavigation();

  useEffect(() => {
    doGetAllAddress();
  }, []);

  const doGetAllAddress = async () => {
    const res = await getAllAddress();
    if (res) {
      setAddressList(res);
      //console.log(res);
    } else {
      console.log("Error al obtener las direcciones");
    }
  };

  const renderAddressCard = ({ item }) => {
    const handleCardPress = () => {
      Navigation.navigate("", { providerId: item.id });
    };

    return (
      <TouchableOpacity onPress={handleCardPress}>
        <Card>
          <Card.Title>{item.servName}</Card.Title>
          <Text>{item.description}</Text>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 2, backgroundColor: "#E5E5E5" }}>
     
            <View
              style={{
                //flexDirection: "row",
                //justifyContent: "space-between",
                marginTop: 5,
                marginBottom: 20,
              }}
            ></View>
            <View style={{ padding: 0 }}>
              <Image
                source={require("../assets/location.jpg")}
                style={{ width: 400, height: 200 }}
              />
            </View>

            <TouchableOpacity
              onPress={() => Navigation.navigate("CurrentAddress")}
            >
              <Text
                style={{
                  marginTop: 10,
                  color: "#574196",
                  fontSize: 16,
                  paddingTop: 5,
                  textAlign: "right",
                  textDecorationLine: "underline",
                  fontWeight: "bold"
                }}
              >
                Agregar nueva dirección
              </Text>
            </TouchableOpacity>

            <View
              style={{
                //flexDirection: "row",
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
                Direcciones Guardadas
              </Text>
            </View>

    </SafeAreaView>
  );
}
