import { api } from "../libs/axios"

export const getAlbumsDetailList = async (slug) => {
    try {
        const response = await api.get(`/albums/details/${slug}`)
        const items = response.data;
        return items;
    } catch (error) {
        console.log(error);
        return false;
    }
}