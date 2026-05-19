import { api } from "./api"

export async function listarClassificacaoIndicativa(){
    try{
        const response = await api.get("ClassificacaoIndicativa");  
        return response;
    }
    catch(error: any){
        throw new Error(error.response.data);
    }
}
