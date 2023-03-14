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
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchsinToken, fetchconToken } from "../services/api";

export default function SellerHomeScreen() {

  const [userName, setUserName] = useState("");
  const Navigation = useNavigation();

  const profileImage = {
    uri: "https://cdn-icons-png.flaticon.com/512/138/138664.png?w=826&t=st=1678650958~exp=1678651558~hmac=dd1f0804ed139b430a40330ce462f3abe61ff302be4ad4b8efed2943a962465f",
    //uri: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600",
  };

  return (
<SafeAreaView style={{ flex: 1, backgroundColor: "#E5E5E5" }}>
      <ScrollView style={{ padding: 30 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 5,
            marginBottom: 20,
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 24,
              }}
            >
              {userName ? `Hello ${userName}` : "Hello"}
            </Text>

          </View>
          <View>
            <TouchableOpacity
              onPress={() => Navigation.navigate("EditProfile")}
            >
              <ImageBackground
                source={profileImage}
                style={{ width: 55, height: 55 }}
                imageStyle={{ borderRadius: 25 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#c6c6c6",
            paddingHorizontal: 10,
            paddingVertical: 8,
            backgroundColor: "white",
          }}
        >
          <MaterialIcons name="search" size={24} color="#c6c6c6" />
          <TextInput placeholder="Buscar" />
        </View>


        <View>
          <Text
            style={{
              fontSize: 20,
              paddingTop: 10,
              paddingBottom: 10,
            }}
          >
            Solicitudes recientes
          </Text>
          <Image
            style={{
              width: 450,
              height: 150,
              borderRadius: 10,
              padding: 5,
              margin: 5,
            }}
            source={{
              uri: "https://images.pexels.com/photos/64609/pexels-photo-64609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
          />

          <Image
            style={{
              width: 450,
              height: 150,
              borderRadius: 10,
              padding: 5,
              margin: 5,
            }}
            source={{
              uri: "https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
          />

          <Image
            style={{
              width: 450,
              height: 150,
              borderRadius: 10,
              padding: 5,
              margin: 5,
            }}
            source={{
              uri: "https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
          />

          <Image
            style={{
              width: 450,
              height: 150,
              borderRadius: 10,
              padding: 5,
              margin: 5,
            }}
            source={{
              uri: "https://images.pexels.com/photos/209230/pexels-photo-209230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
          />

          <Image
            style={{
              width: 450,
              height: 150,
              borderRadius: 10,
              padding: 5,
              margin: 5,
            }}
            source={{
              uri: "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
          />

          <Image
            style={{
              width: 450,
              height: 150,
              borderRadius: 10,
              padding: 5,
              margin: 5,
            }}
            source={{
              uri: "https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
          />

          <Image
            style={{
              width: 450,
              height: 150,
              borderRadius: 10,
              padding: 5,
              margin: 5,
            }}
            source={{
              uri: "https://images.pexels.com/photos/4530187/pexels-photo-4530187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1r",
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}