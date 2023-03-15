import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';

const slides = [
  {
    image: require('../assets/images/home/carpintero.png'),
    title: 'Carpinteria',
  },
  {
    image: require('../assets/images/home/constructor.png'),
    title: 'Construcción',
  },
  {
    image: require('../assets/images/home/electricista.png'),
    title: 'Electricista',
  },
];

export default function MySwiper() {

  const navigation = useNavigation();

  return (
    <Swiper style={styles.wrapper} showsButtons={true} loop={true}>
      {slides.map((slide, index) => (
        <View key={index} style={styles.slide}>
          <ImageBackground
            source={slide.image}
            style={styles.imageBackground}
            resizeMode="cover"
          >
            <Text style={styles.text}>{slide.title}</Text>
          </ImageBackground>
        </View>
      ))}
    </Swiper>
  );
}

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
  },
});
