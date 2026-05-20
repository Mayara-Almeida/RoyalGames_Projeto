import Header from "@/components/header/header";
import styles from "./jogo.module.css"
import Footer from "@/components/footer/footer";
import ListaProduto from "@/components/lista-produto/lista-produto";
import Botao from "@/components/botao/botao";
import { use, useEffect, useState } from "react";
import { listarGenero } from "../api/generoService";
import { listarPlataforma } from "../api/plataformaService";
import { listarClassificacaoIndicativa } from "../api/classificacaoIndicativa";
import { cadastrarJogo } from "../api/jogoService";
import { erro, notificacao } from "@/utils/toast";

interface Genero {
    generoID: number,
    nome: string
}

interface Plataforma {
    plataformaID: number,
    nome: string
}

interface ClassificacaoIndicativa {
    classificacaoIndicativaID: number,
    classificacao: string
}

const Jogo = () => {

    // Listagens que vem da api
    const [generos, setGeneros] = useState<Genero[]>([]);
    const [plataformas, setPlataformas] = useState<Plataforma[]>([]);
    const [classificacoes, setClassificacoes] = useState<ClassificacaoIndicativa[]>([]);


    async function listarGeneroEmJogo() {
        const listaGeneros = await listarGenero();

        setGeneros(listaGeneros.data); // Guarda os dados retornados pela API
        console.log(listaGeneros.data);
    }

    async function listarPlataformaEmJogo() {
        const listaPlataformas = await listarPlataforma();

        setPlataformas(listaPlataformas.data);
        console.log(listaPlataformas.data);
    }

    async function listarClassificacaoIndicativaEmJogo() {
        const listaClassificacoes = await listarClassificacaoIndicativa();

        setClassificacoes(listaClassificacoes.data);
        console.log(listaClassificacoes.data);
    }

    // Cadastro de jogo
    const [nome, setNome] = useState<string>("");
    const [preco, setPreco] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");
    const [imagem, setImagem] = useState<File | null>(null);
    const [generosSelecionados, setGenerosSelecionados] = useState<number[]>([]);
    const [plataformasSelecionadas, setPlataformasSelecionadas] = useState<number[]>([]);
    const [classificacaoSelecionada, setClassificacaoSelecionada] = useState<number>();

    // async function salvarJogo(e: React.FormEvent<HTMLFormElement>) {
    //     e.preventDefault();
    //     try {
    //         const dadosJogo = { // O nome desses valores tem que estar igual ao que passamos na inteface criada na hora de cadastrar(nesse caso a interface "JogoFormulario")
    //             nome,
    //             preco,
    //             descricao,
    //             imagem,
    //             generosIds: generosSelecionados,
    //             plataformasIds: plataformasSelecionadas,
    //             classificacaoIndicativaId: classificacaoSelecionada
    //         }

    //         await cadastrarJogo(dadosJogo);
    //         notificacao("Produto cadastrado!");
    //     }
    //     catch (error: any) {
    //         erro(error.message);
    //     }
    // }

    useEffect(() => {
        listarGeneroEmJogo();
        listarPlataformaEmJogo();
        listarClassificacaoIndicativaEmJogo();
    }, []) // O array vazio[], diz que o useEffect só vai executar essas ações uma vez, quando a tela for carregada inicialmente,
    //isso impede o loop infinito das informações 


    return (
        <>
            <div className={styles.pagina}>
                <Header textoLink="Catálogo" textoBotao="Deslogar" />
                <main className={styles.main}>


                    <section className={styles.cadastro}>
                        <div className={`${styles.container_cadastro} layout_guide efeito_vidro_card`}>
                            <div className={styles.titulo}>
                                <h1>Cadastrar novo jogo</h1>
                                <hr className="linha_titulo" />
                            </div>
                            <form className={styles.formulario} action="" >


                                <div className={styles.form_esquerda}>

                                    <div className={styles.campo_form}>
                                        <label htmlFor="nome">Nome</label>
                                        <input className="efeito_vidro_input" type="text" name="nome" required />
                                    </div>

                                    <div className={styles.campos_meio}>
                                        <div className={styles.campo_form}>
                                            <label htmlFor="valor">Valor</label>
                                            <input className="efeito_vidro_input" type="text" name="valor" required />
                                        </div>
                                        <div className={styles.campo_form}>
                                            <label htmlFor="genero">Gênero</label>
                                            <select className="efeito_vidro_input"
                                                multiple
                                                value={generosSelecionados.map(String)} // Vai pegar o id dos gêneros selecionados e transformar em string
                                                onChange={(e) => setGenerosSelecionados( // Pegar itens selecionados e salvar no state em array
                                                    Array.from(e.target.selectedOptions).map((option) => Number(option.value))
                                                )}>
                                                {generos.map((item) => ( // Traz a lista mapeada dos itens(gêneros)
                                                    <option value={item.generoID} key={item.generoID}>{item.nome}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className={styles.campo_form}>
                                            <label htmlFor="classificacao">Classificação Indicativa</label>
                                            <select className="efeito_vidro_input" name="classificacao" id=""></select>
                                        </div>
                                    </div>

                                    <div className={styles.campos_baixo}>
                                        <div className={styles.campo_form}>
                                            <label htmlFor="plataforma">Plataforma</label>
                                            <select className="efeito_vidro_input"
                                                multiple
                                                value={plataformasSelecionadas.map(String)}
                                                onChange={(e) => setPlataformasSelecionadas(
                                                    Array.from(e.target.selectedOptions).map((option) => Number(option.value))
                                                )}>
                                                {plataformas.map((item) => (
                                                    <option value={item.plataformaID} key={item.plataformaID}>{item.nome}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className={styles.campo_form}>
                                            <label htmlFor="imagem">Imagem</label>
                                            <input className="efeito_vidro_input" type="file" name="imagem" required />
                                        </div>
                                    </div>
                                </div>

                                <div className={`${styles.form_direita} ${styles.campo_form}`}>
                                    <label htmlFor="descricao">Descrição</label>
                                    <textarea className="efeito_vidro_input" name="descricao" required />
                                </div>
                            </form>
                            <Botao className={styles.botao_cadastro}>Cadastrar</Botao>
                        </div>
                    </section>

                    <section className={styles.catalogo}>
                        <div className={styles.titulo}>
                            <h1>Lista de jogos</h1>
                            <hr className="linha_titulo" />
                        </div>
                        <ListaProduto />
                    </section>
                </main>
                <Footer />
            </div>
        </>
    )
}
export default Jogo;