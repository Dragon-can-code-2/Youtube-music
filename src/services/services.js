import { api } from "../libs/axios"

export const getCategoryList = async () => {
    try {
        const response = await api.get("/categories")
        const { items } = response.data;
        return items;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const getAlbumForYou = async () => {
    try {
        const response = await api.get(`/home/albums-for-you`);
        const items = response.data;
        return items;
    } catch (error) {
        console.log(error);

        return false;
    }
};

export const getQuickPickList = async () => {
    try {
        const response = await api.get("/quick-picks")
        const items = response.data;
        return items;
    } catch (error) {
        console.log(error);
        return false;
    }
}
export const getFeaturedList = async () => {
    try {
        const response = await api.get("/quick-picks")
        const items = response.data;
        return items;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const getTodayHits = async () => {
    try {
        const response = await api.get(`/home/todays-hits`);
        const items = response.data;
        return items;
    } catch (error) {
        console.log(error);
        return false;
    }
};

export const getNewReleasesList = async () => {
    try {
        const response = await api.get(`/explore/new-releases`);
        const { items } = response.data;
        return items;
    } catch (error) {
        console.log(error);
        return false;
    }
};

export const getMoodsList = async () => {
    try {
        const response = await api.get("/moods")
        const { items } = response.data;
        return items;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const getExploreVideoList = async () => {
    try {
        const response = await api.get("/explore/videos")
        const { items } = response.data;
        return items;
    } catch (error) {
        console.log(error);
        return false;
    }
}