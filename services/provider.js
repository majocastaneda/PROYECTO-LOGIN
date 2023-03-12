import { fetchconToken } from "./api";

export const registerProvider = async (ServName, Description, CategoryId) => {
  const data = {
    ServName,
    Description,
    CategoryId,
  };
  // const response = await fetchsinToken('User', data, 'POST');
  const response = await fetchconToken("User/provider", data, "POST");
  console.log(response.data);
  return response.data;
};
