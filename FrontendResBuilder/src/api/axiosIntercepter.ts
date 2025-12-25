import { authStorage } from "../utils/authStorage";
import {axiosClientNonCookie} from "./axiosClient";

axiosClientNonCookie.interceptors.request.use(
    (config)=>{
        const accessToken:string|undefined = authStorage.getAccessToken();
        if(accessToken){
            config.headers.Authorization =`Bearer ${accessToken}`
        }
        return config
    },(error)=>Promise.reject(error)
);


