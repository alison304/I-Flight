import axios from "axios";

const clientId = import.meta.env.VITE_CLIENT_ID;
const clienteSecret = import.meta.env.VITE_CLIENT_SECRET;
let urlencoded = new URLSearchParams();

urlencoded.append("grant_type", "client_credentials");
urlencoded.append("client_id", clientId);
urlencoded.append("client_secret", clienteSecret);

const authUrl = "https://test.api.amadeus.com/v1/security/oauth2/token";
const baseUrl = "https://test.api.amadeus.com/v2/shopping/flight-offers";

export const authToken = async () => {
  try {
    const dataAuth = await axios.post(authUrl, urlencoded);
    sessionStorage.setItem("token", dataAuth.data.access_token);
    return dataAuth.data.access_token;
  } catch (error) {
    return error;
  }
};

export const apiCall = async (url, data, method) => {
  let token = sessionStorage.getItem("token");
  let response = 
  await axios({
    method,
    url,
    data,
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });
  return response;
};
