import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import styles from "./home.module.css"
import ListaProduto from "@/components/lista-produto/lista-produto";

const Home = () => {
    return (
        <>
            <div className={styles.pagina}>
                <Header textoBotao="Login" textoLink="Catálogo" />
                <main className={styles.main}>

                    { /* -----------------------------SEÇÃO BANNER--------------------------------- */}
                    <section className={styles.banner}>
                        <div className={styles.fundo_banner}>
                            <div className={`${styles.container_banner} layout_guide`}>
                                <div className={styles.textos_esquerda}>
                                    <h1 className={styles.titulo_banner}>Conheça nossos jogos!</h1>
                                    <p className={styles.texto}>Navegue por títulos de todas as gerações, descubra plataformas, gêneros e detalhes completos antes de escolher sua próxima aventura. Seu próximo jogo favorito começa aqui.</p>
                                </div>
                            </div>
                        </div>
                        <img src="./imgs/imagem_banner.svg" alt="Mulher com visual cyberpunk, usando jaqueta de couro futurista e detalhes tecnológicos brilhantes, com um feixe vermelho saindo dos olhos em um cenário sombrio e moderno." className={styles.imagem_banner} />
                    </section>

                    { /* -----------------------------SEÇÃO CATÁLOGO--------------------------------- */}
                    <section className={styles.catalogo} id="catalogo">
                        <div className={styles.titulo}>
                            <h1 className={styles.titulo_catalogo}>Catálogo de jogos</h1>
                            <hr className="linha_titulo"></hr>
                        </div>
                        <ListaProduto />
                    </section>

                    { /* -----------------------------SEÇÃO ESTUDO--------------------------------- */}
                    <section className={`${styles.estudo} layout_guide`}>
                        <div className={styles.titulo}>
                            <h1 className={styles.titulo_catalogo}>Jogos online podem afetar o comportamento humano?</h1>
                            <hr className={`${styles.linha_estudo} linha_titulo`}></hr>
                        </div>
                        <div className={`${styles.card_fotos} layout_guide efeito_vidro_card`}>
                            <img src="./imgs/img_lol.svg" alt="" />
                            <img src="./imgs/img_tiro.svg" alt="" />
                        </div>
                        <p className={styles.texto_estudo}> Estudos indicam que jogos podem alterar o comportamento humano… <br /> Principalmente quando o time resolve testar sua paciência em plena partida ranqueada.</p>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    )
}
export default Home;