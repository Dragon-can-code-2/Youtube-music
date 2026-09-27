import { api } from "../libs/axios"

export const getPlaylistDetailList = async (slug) => {
    try {
        const response = await api.get(`/playlists/details/${slug}`)
        const items = response.data;
        return items;
    } catch (error) {
        console.log(error);
        return false;
    }
}