import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Acerca de la aplicación</Text>
      <Text style={styles.description}>Uneed es una aplicación móvil para agendar servicios en el hogar, oficina o cualquier otro lugar. Con una interfaz amigable y fácil de usar, los usuarios pueden encontrar y programar una amplia variedad de servicios, desde limpieza y mantenimiento hasta reparaciones y servicios técnicos.

En Uneed nos preocupamos por la privacidad de nuestros usuarios, por lo que cumplimos con la ley de seguridad de datos para garantizar la protección de su información personal. Nuestro objetivo es brindar un servicio confiable y seguro, para que nuestros usuarios puedan disfrutar de la comodidad de contratar servicios en línea sin preocupaciones.</Text>
      <Text style={styles.version}>Versión 1.0.0</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 50,
      backgroundColor: '#fff',
      alignItems: "center"
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      marginTop: 20,
      color: "#574196"
    },
    description: {
      fontSize: 16,
      marginBottom: 30,
      textAlign: 'justify'
    },
    version: {
      fontSize: 14,
      color: "#574196",
      textAlign: 'center',
      fontWeight: 'bold',
    },
  });
  
