import axios from "axios";

import { BACKEND_API_URL } from "../../globalEnvConfig";

const axiosClientNonCookie = axios.create({
  baseURL: BACKEND_API_URL,
  withCredentials: false,
  timeout: 3000,
});

const axiosClientWithCookie = axios.create({
    baseURL:BACKEND_API_URL,
    withCredentials:true,
    timeout: 3000,
})
    

export{
    axiosClientNonCookie,
    axiosClientWithCookie
}