import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { Component } from "react";
import { TextInput } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import MySwiper from '../components/Carousel';
import { itemwidth, windowWidth } from "../util/Dimensions";

export default function HomeScreen2() {


  const profileImage = {
    uri: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600",
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
              Hello Jane Doe
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: "#574196",
              }}
            >
              Ignacio Asin y Antonio Roman
            </Text>
          </View>
          <View>
            <ImageBackground
              source={profileImage}
              style={{ width: 55, height: 55 }}
              imageStyle={{ borderRadius: 25 }}
            />
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
            Top de categorias
          </Text>
          <TouchableOpacity onPress={() => { }}>
            <Text
              style={{
                color: "#574196",
                fontSize: 14,
                paddingTop: 5,
              }}
            >
              Ver más
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 300,
            borderRadius: 10,
          }}>
          <MySwiper
          />
        </View>


        <View
        >
          <Text
            style={{
              fontSize: 20,
              paddingTop: 10,
              paddingBottom: 10,
            }}
          >
            Encuentra el servicio para ti
          </Text>
          <Image
            style={{
              width: 450,
              height: 150,
              borderRadius: 10,
              padding: 5,
              margin: 5
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
              margin: 5
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
              margin: 5
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
              margin: 5
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
              margin: 5
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
              margin: 5
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
              margin: 5
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
