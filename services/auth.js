import { fetchsinToken, fetchconToken } from "./api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const loginByUserAndPassword = async (username, password) => {
  try {
    const resp = await fetchsinToken(
      "Login/auth",
      { username, password },
      "POST"
    );
    //console.log(resp);
    console.log(resp);

    if (resp.status === 200) {
      const body = { token: resp.data.token };
      console.log(body);
      await AsyncStorage.setItem("token", body.token);
     
      return body;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};
export const renewToken = async () => {
  const resp = await fetchconToken("Login/renew", null, "POST");

  if (resp.status === 200) {
    const body = { token: resp.data.token };
    console.log(resp);
    await AsyncStorage.setItem("token", body.token);
    
    return body;
  } else {
    return null;
  }

  console.log(resp);
};
