import { listarJogo } from "@/pages/api/jogoService";
import CardJogo from "../card-jogo/card-jogo";
import styles from "./lista-produto.module.css"
import { useEffect, useState } from "react";
import Botao from "../botao/botao";

interface Jogo{
    jogoID: number,
    nome: string,
    preco: number,
    imagemUrl: string,
    statusJogo: boolean
}

const ListaProduto = () => {

    const[pesquisa, setPesquisa] = useState("");

    const[ordem, setOrdem] = useState("todos");

    const[jogos, setJogos] = useState<Jogo[]>([]);

    async function listar(){
        try{
            const lista = await listarJogo();

            setJogos(lista);
        }
        catch(error: any){
            console.log(error.mesage);
        }
    }

    useEffect(() => {
        listar();
    }, [])

    
    console.log(jogos);
    return (
        <>
            <main id={styles.main}>
                <div className={`${styles.container_listagem} layout_guide`}>
                    <div className={styles.botoes_catalogo}>

                        <div className={styles.campo_pesquisa}>
                            <input className="efeito_vidro_input"
                                type="text"
                                name="pesquisa"
                                id=""
                                placeholder="Pesquise..." />
                        </div>

                        <div className={styles.filtro}>
                            <select className={`${styles.filtro_select} efeito_vidro_input`}>
                                <option value="todos">Todos</option>
                                <option value="menor_valor">Menor valor</option>
                                <option value="maior_valor">Maior valor</option>
                            </select>
                        </div>

                        <div className={styles.filtro}>
                            <select className={`${styles.filtro_select} efeito_vidro_input`} name="generos" id="">
                                <option value="genero">Gênero</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.cards}>
                        {jogos.map((item) => (
                            <CardJogo 
                            key={item.jogoID}
                            jogoID={item.jogoID}
                            nome={item.nome}
                            preco={item.preco}
                            img={item.imagemUrl}
                        />
                        ))}
                        
                    </div>
                   <div className={styles.paginacao}>
                        <Botao className={styles.botao_paginacao}><img src="./imgs/seta_esquerda.svg" alt="" /></Botao>
                        <Botao className={styles.botao_paginacao}>1</Botao>
                        <Botao className={styles.botao_paginacao}>2</Botao>
                        <Botao className={styles.botao_paginacao}>3</Botao>
                        <Botao className={styles.botao_paginacao}>4</Botao>
                        <Botao className={styles.botao_paginacao}>5</Botao>
                        <Botao className={styles.botao_paginacao}><img src="./imgs/seta_direita.svg" alt="" /></Botao>
                   </div>
                </div>
            </main>
        </>
    )
}
export default ListaProduto;