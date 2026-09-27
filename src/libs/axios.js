import axios from "axios"
import { getAccessToken, getNewToken, saveToken } from "../utils/auth"

let refreshTokenPromise = null;

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_SERVER,
    timeout: 10000,
})

api.interceptors.request.use(
    (config) => {
        const accessToken = getAccessToken();
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)
api.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        if (error.status === 401) {

            if (!refreshTokenPromise) {
                refreshTokenPromise = getNewToken().then(token => {
                    saveToken(token);
                    refreshTokenPromise = null;
                    return token;
                })
            };
            const newToken = await refreshTokenPromise;

            if (newToken) {
                return api(error.config);
            }
        }
        return Promise.reject(error)
    }
)