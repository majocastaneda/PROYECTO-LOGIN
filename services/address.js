import { fetchconToken } from './api';

export const registerAddress = async (
  name,
  main,
  secondary,
  city,
) => {
  const data = {
    name,
    main,
    secondary,
    city,
  };
// const response = await fetchsinToken('User', data, 'POST');
  const response = await fetchconToken('User/address', data, 'POST');
  console.log(response.data);
  return response.data;
};