import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import styles from "./home.module.css"
import ListaProduto from "@/components/lista-produto/lista-produto";

const Home = () => {
    return (
        <>
            <main id={styles.main}>
                <Header textoBotao="" textoLink=""/>

                { /* -----------------------------SEÇÃO BANNER--------------------------------- */}
                <section id={styles.banner}>
                    <div className={`${styles.container_banner} layout_guide`}>
                        <div className={styles.textos_esquerda}>
                            <h1 className={styles.titulo_banner}>Conheça nossos jogos!</h1>
                            <p className={styles.texto}>Navegue por títulos de todas as gerações, descubra plataformas, gêneros e detalhes completos antes de escolher sua próxima aventura. Seu próximo jogo favorito começa aqui.</p>
                        </div>
                    </div>
                    <img src="./imgs/imagem_banner.svg" alt="Mulher com visual cyberpunk, usando jaqueta de couro futurista e detalhes tecnológicos brilhantes, com um feixe vermelho saindo dos olhos em um cenário sombrio e moderno." className={styles.imagem_banner} />
                </section>

                { /* -----------------------------SEÇÃO CATÁLOGO--------------------------------- */}
                <section id={styles.catalogo}>
                    <div className={styles.topo}>
                        <h1 className={styles.titulo_catalogo}>Catálogo de jogos</h1>
                        <hr className={styles.linha}></hr>
                    </div>
                    <ListaProduto/>
                </section>

                <section></section>
                <Footer />
            </main>
        </>
    )
}
export default Home;