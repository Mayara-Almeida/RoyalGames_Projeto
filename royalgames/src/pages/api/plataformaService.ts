import { api } from "./api";

export async function listarPlataforma(){
    try{
        const response = await api.get("Plataforma");
        console.log(response.data)
        return response;
    }
    catch(error: any){
        throw new Error(error.response.data);
    }
}