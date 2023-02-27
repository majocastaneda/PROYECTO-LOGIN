import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const baseUrl = 'http://186.4.129.103:8085/api';

export const fetchsinToken = (endpoint, data, method = 'GET') => {
  const url = `${baseUrl}/${endpoint}`;
  console.log(url);
  if (method === 'GET') {
    return axios.get(url);
  } else {
    return axios.post(url, data);
  }
};

export const fetchconToken = async (endpoint, data, method = 'GET') => {
  const url = `${baseUrl}/${endpoint}`;

  const token = await AsyncStorage.getItem('token');

  if (method === 'GET') {
    return axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } else {
    return axios.post(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
};