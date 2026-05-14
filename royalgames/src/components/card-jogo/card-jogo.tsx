import styles from "./card-jogo.module.css"

const CardJogo = () => {
    return (
        <>
            <article id={styles.card_jogo}>
                <img src="./imgs/jogo_mine.svg" alt="" className={styles.imagem_jogo}/>
                <h3 className={styles.nome_jogo}></h3>
                <p className={styles.preco_jogo}>R$ 70,00</p>
                <button className={styles.btn_detalhes}>Detalhes</button>
            </article>
        </>
    )
}
export default CardJogo;