import axios from "axios";
import { BACKEND_API_URL } from "../../globalEnvConfig";


export class authService {

    public static async login(email: string, password: string) {
        const loginResponse = await axios.post(`${BACKEND_API_URL}/login`, { email, password });
        if (loginResponse.status === 200) {
            const expireAt = Date.now() + 1000 * 60 * 15;
            const userData = {
                token: loginResponse.data.token,
                user: loginResponse.data.user,
                expireAt: expireAt
            }
            localStorage.setItem('user', JSON.stringify(userData));
            return userData;
        }
    }
    public static async register(data: { email: string, password: string, fullName: string }) {
        const userData = {
            full_name: data.fullName,
            email: data.email,
            password_hash: data.password
        }
        const registerResponse = await axios.post(`${BACKEND_API_URL}/register`, userData);
        if (registerResponse.status === 200) {
            const expireAt = Date.now() + 1000 * 60 * 15;
            const userData = {
                token: registerResponse.data.token,
                user: registerResponse.data.user,
                expireAt: expireAt
            }
            localStorage.setItem('user', JSON.stringify(userData));
            const datacheck = localStorage.getItem('user');
            console.log(datacheck);
            return userData;
        }

    }
    public static async refreshToken() {
        const newTokenResponse = await axios.post(`${BACKEND_API_URL}/refreshToken`);
        if (newTokenResponse) {
            const expireAt = Date.now() + 1000 * 60 * 15;
            const userData = JSON.parse(localStorage.getItem('user') || '{}');
            userData.token = newTokenResponse.data.token;
            userData.expireAt = expireAt;
            localStorage.setItem('user', JSON.stringify(userData));
            return userData;
        }
    }
    public static async startTokenRefreshTimer() {
        if (window.refreshTokenTimer) {
            clearTimeout(window.refreshTokenTimer);
        }
        const userData = JSON.parse(localStorage.getItem('user') || '{}');
        if (!userData) {
            throw new Error("unable to find the user Data");
        }
        const timeToRefresh = userData.expireAt - Date.now() - (1000 * 60 * 3);
        if (timeToRefresh > 0) {
            window.refreshTokenTimer = setTimeout(this.refreshToken, timeToRefresh);
        } else {
            this.refreshToken();
        }
        if (userData.expireAt < Date.now()) {
            this.logout();
        }
    }

    public static async logout(): Promise<void> {
        localStorage.removeItem('user');
        clearTimeout(window.refreshTokenTimer);
        window.location.href = '/login';
    }
}

