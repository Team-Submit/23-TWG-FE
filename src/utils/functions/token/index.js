import axios from "axios";
import cookies from "react-cookies";

const EXPIRE_TIME = 1000 * 60 * 60 * 2;

export const setToken = (accessToken, refreshToken) => {
  axios.defaults.headers.common.Authorization = "Bearer" + accessToken;
  const expires = new Date();
  expires.setDate(Date.now() + EXPIRE_TIME);

  cookies.save("accessToken", accessToken, {
    path: "/",
    expires,
  });

  cookies.save("refreshToken", refreshToken, {
    path: "/",
    expires,
  });
};

export const removeToken = () => {
  cookies.remove("accessToken");
  cookies.remove("refreshToken");
};

export const getToken = () => {
  const { accessToken, refreshToken } = cookies.select();
  return { accessToken, refreshToken };
};
