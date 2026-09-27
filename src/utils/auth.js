import { api } from "../libs/axios";

export const saveToken = (token) => {
    localStorage.setItem("access_token", token.access_token);
    localStorage.setItem("refresh_token", token.refresh_token);
}

export const getAccessToken = () => {
    return localStorage.getItem("access_token")
}

export const getRefreshToken = () => {
    return localStorage.getItem("refresh_token")
}

export const clearToken = () => {
    localStorage.removeItem("access_token")
    localStorage.removeItem("refresh_token")
}

export const getNewToken = async () => {
    try {
        const refreshToken = getRefreshToken();
        const response = await api.post("/auth/refresh-token", {
            refreshToken: refreshToken
        });
        return response.data;
    } catch (error) {
        return false
    }
};