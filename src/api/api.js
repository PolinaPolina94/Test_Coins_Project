import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.coincap.io/v2/assets",
    // withCredentials: true,
    // headers: {
    //     "API-KEY": "e95f2d0c-3a3e-4988-b7ae-1ca1e96eb3dd"
    //     }
})

export const coinAPI = {
    getCoins () {
        return instance.get(`/`)
            .then(response => response.data.data)
    } ,

    getCoinInfo (coinId) {
        return instance.get(`/${coinId}`)
        .then(response => response.data.data)
    }
}