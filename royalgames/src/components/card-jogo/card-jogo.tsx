import Botao from "../botao/botao";
import styles from "./card-jogo.module.css"

const CardJogo = () => {
    return (
        <>
            <article className={`${styles.card_jogo} efeito_vidro_card`}>
                <img src="./imgs/jogo_mine.svg" alt="" className={styles.imagem_jogo} />
                <div className={styles.infos}>
                    <h3 className={styles.nome_jogo}>Minecraft</h3>
                    <p className={styles.preco_jogo}>R$ 70,00</p>
                </div>
                <div className={styles.botoes_baixo}>
                    <Botao className={styles.botoes}>Detalhes</Botao>
                    <Botao className={styles.botoes}>Editar</Botao>
                </div>
            </article>
        </>
    )
}
export default CardJogo;