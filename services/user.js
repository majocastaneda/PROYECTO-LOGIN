import { fetchsinToken } from './api';

export const registerUser = async (
  name,
  lastname,
  email,
  password,
  identification,
  phone,
  address,
  gender,
  birthDate,
) => {
  const data = {
    name,
    lastname,
    email,
    password,
    identification,
    phone,
    address,
    gender,
    birthDate,
  };
  const response = await fetchsinToken('User', data, 'POST');
  console.log(response);
  return response.data;
};