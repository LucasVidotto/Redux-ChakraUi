import axios from "axios";

const reactEnv = process.env.REACT_APP_ENV;

console.log("REACT_APP_ENV", reactEnv);

const urls = {
  development: "http://localhost:4040/api",
  production: "https://api_url/api",
};

const client = axios.create({
  baseURL: urls[reactEnv],
  responseType: "json",
});

const getBearerToken = () =>
  new Promise((resolve) => resolve("test token 123"));

export const axiosMiddlewareOptions =
  reactEnv === "production"
    ? {
        interceptors: {
          request: [
            /* eslint-disable no-unused-vars */
            async ({ getState, dispatch }, config) => {
              const token = await getBearerToken();
              config.headers.Authorization = `Bearer ${token}`;
              return config;
            },
          ],
        },
      }
    : {};

client.interceptors.request.use(async (config) => {
  const token = await getBearerToken();
  config.headers.Authorization = `Bearer ${token}`;
});

export default client;
