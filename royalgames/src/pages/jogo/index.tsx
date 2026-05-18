import Header from "@/components/header/header";
import styles from "./jogo.module.css"
import Footer from "@/components/footer/footer";
import ListaProduto from "@/components/lista-produto/lista-produto";
import Botao from "@/components/botao/botao";

interface Genero {
    generoId: number,
    nome: string
}

const Jogo = () => {
    return (
        <>
            <div className={styles.pagina}>
                <Header textoLink="Catálogo" textoBotao="Deslogar"/>
                <main>
                    <section className={styles.cadastro}>
                        <div className={`${styles.container_cadastro} layout_guide efeito_vidro_card`}>
                            <div className={styles.titulo}>
                                <h1>Cadatsrar novo jogo</h1>
                                <hr />
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
                                            <select className="efeito_vidro_input" name="genero" id="" required>
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
                                            <select className="efeito_vidro_input" name="plataforma" id=""></select>
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

                                <Botao>Cadastrar</Botao>
                            </form>
                        </div>
                    </section>
                    <ListaProduto />
                </main>
                <Footer />
            </div>
        </>
    )
}
export default Jogo;