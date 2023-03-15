import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fetchconToken } from '../services/api';

export default function BookingScreen() {
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    const loadContracts = async () => {
      try {
        const response = await fetchconToken('User/contracts');
        setContracts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    loadContracts();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Contracts</Text>
      {contracts.map((contract) => (
        <View key={contract.id} style={styles.contract}>
          <Text>Provider: {contract.providerId}</Text>
          <Text>Date: {contract.dayDate}</Text>
          <Text>Price: {contract.price}</Text>
          <Text>State: {contract.state}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contract: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
  },
});