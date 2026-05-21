import axios from "axios";
import secureLocalStorage from "react-secure-storage";

const apiLocal = "https://localhost:7165/api/";

const apiRemota = "";

export const api = axios.create({
    baseURL: apiLocal
})

api.interceptors.request.use((config) => {
    const token = secureLocalStorage.getItem("Token");

    if(token){
        config.headers.Authorization = "Bearer " + token; // TEM QUE TER O ESPAÇO DEPOIS DE BEARER!!!!
    }

    return config;
});