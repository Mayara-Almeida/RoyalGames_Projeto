import Footer from "@/components/footer/footer";
import styles from "./detalhe-jogo.module.css"
import Header from "@/components/header/header";

const DetalheJogo = () => {
    return (
        <>
            <main id={styles.main}>
                <Header />
                <div className={`${styles.container} layout_guide`}>
                    <div id={styles.card}>
                        <div id={styles.topo}>
                            <h2 className={styles.titulo}>Detalhes do jogo</h2>
                            <hr className={styles.linha}></hr>
                        </div>
                        <div id={styles.jogo}>
                            <img src="./imgs/foto_jogo.svg" alt="Banner de League of Legends com campeões em batalha e efeitos mágicos azuis." className={styles.foto_jogo} />
                            <div id={styles.infos_jogo}>
                                <h3 className={styles.nome_jogo}>League of Legends</h3>
                                    <p className={styles.desc_jogo}>League of Legends (LoL) é um jogo eletrônico do gênero MOBA (Multiplayer Online Battle Arena) onde duas equipes de cinco jogadores competem entre si com o objetivo de destruir a base adversária. Cada jogador controla um campeão com habilidades únicas, exigindo estratégia, trabalho em equipe e tomada de decisões rápidas durante as partidas.</p>
                                    <p className={styles.desc_jogo}>O jogo possui diversos modos, mapas e estilos de jogo, além de oferecer atualizações frequentes com novos personagens, eventos e ajustes de balanceamento. League of Legends é conhecido pelo seu cenário competitivo mundial, reunindo milhões de jogadores e campeonatos profissionais ao redor do mundo.</p>
                            </div>
                        </div>
                        <div id={styles.infos_compra}>
                            <div className={styles.infos_esquerda}>
                                <div className={styles.campo}>
                                    <p className={styles.campo_titulo}>Classificação indicativa: </p>
                                    <p className={styles.campo_valor}>18 anos</p>
                                </div>
                                <div className={styles.campo}>
                                    <p className={styles.campo_titulo}>Preço: </p>
                                    <p className={styles.campo_valor}>R$100,00</p>
                                </div>
                            </div>
                            <div className={styles.infos_direita}>
                                <div className={styles.campo}>
                                    <p className={styles.campo_titulo}>Gêneros: </p>
                                    <p className={styles.campo_valor}>Terror</p>
                                </div>
                                
                                <div className={styles.campo}>
                                    <p className={styles.campo_titulo}>Plataformas: </p>
                                    <p className={styles.campo_valor}>PS5</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </main>

        </>
    )
}
export default DetalheJogo;