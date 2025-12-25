import { AUTH_KEY } from "../../globalEnvConfig"
import { Log } from "./logger"
interface authData{
    token?: string,
    user?:{id:string}
    expireAt?: number
}

export const authStorage={

    getAuthData():authData|null{
        try {
            const rawUserData:string|null =(localStorage.getItem(AUTH_KEY))
            if(!rawUserData) throw new Error("unable to Get AuthData");
            const userData :authData=JSON.parse(rawUserData)
            return userData
        } catch (error) {
            Log.error("Unable to get the Auth Data ",error as Error);
            return null
        }
    },
    setAuthData(data:authData):void{
        try {
            const convData:string = JSON.stringify(data)
            localStorage.setItem(AUTH_KEY,convData)
        } catch (error) {
            Log.error("Unable to store the Auth Data ",error as Error);
        }
    },
    getAccessToken():string|undefined{
        try {
            const rawUserData:string|null = localStorage.getItem(AUTH_KEY)
            if(!rawUserData){
                throw new Error("unable to find the key in storage")
            }
            const userData:authData = JSON.parse(rawUserData)
            return userData.token
        } catch (error) {
            Log.error("Unable to get access token ",error as Error);
        }
    },
    isExpired():boolean{
        try {
            const data:authData|null = this.getAuthData();
            if(!data?.expireAt)
                {throw new Error}
            return data?.expireAt<Date.now()?true:false;
        } catch (error) {
            Log.error("unable to Find the Expired or Not",error as Error);
            return true 
        }
    },
    clear():void{
        try {
            localStorage.removeItem(AUTH_KEY) 
        } catch (error) {
            Log.error("Unable to Delete",error as Error);
        }
    }
}