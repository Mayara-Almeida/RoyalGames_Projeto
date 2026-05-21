import { api } from "./api";

interface JogoFormulario{ // Interface para cadastrar jogo
    nome: string,
    preco: string,
    descricao: string,
    imagem: File | null,
    classificacaoIndicativaId: number, // É um array, pois da api vem mais de um valor para selecionar
    generosIds: number[],
    plataformasIds: number[]
}

type JogoListagem = { // Receber produto da api
    nome: string,
    preco: string,
    descricao: string,
    imagem: File | null,
    classificacaoIndicativaId: number,
    generosIds: number[],
    plataformasIds: number[],
    statusJogo: boolean,
    imagemUrl: string
}

export async function cadastrarJogo(dados: JogoFormulario){
    try{
        const formData = new FormData();
        formData.append("nome", dados.nome);
        formData.append("preco", dados.preco);
        formData.append("descricao", dados.descricao);
        if(dados.imagem){
            formData.append("imagem", dados.imagem)
        }
        formData.append("classificacaoIndicativaId", dados.classificacaoIndicativaId.toString());

        dados.generosIds.forEach((id) => {
            formData.append("generosIds", id.toString());
        })

        dados.plataformasIds.forEach((id) => {
            formData.append("plataformasIds", id.toString());
        })

        await api.post("Jogo", formData)
    } 
    catch(error: any){
        throw new Error(error.response.data);
    }
}

export async function listarJogo(){
    try{
        const response = await api.get("Jogo");

        // Filtrar somente os jogos ativos
        const jogosAtivos = response.data.filter(
            (jogo: JogoListagem) => jogo.statusJogo === true
        );

        // Acrescenta a url da imagem na lista de produtos acima
        const jogos = jogosAtivos.map((jogo: JogoListagem) => ({
            ...jogo,
            imagemUrl: `${api.defaults.baseURL}${jogo.imagemUrl}`
        }))

        return jogos;
    }
    catch(error: any){
        throw new Error(error.response.data);
    }
}