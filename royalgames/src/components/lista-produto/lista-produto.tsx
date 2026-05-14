import CardJogo from "../card-jogo/card-jogo";
import styles from "./lista-produto.module.css"

const ListaProduto = () => {
    return (
        <>
            <main id={styles.main}>
                <div className={styles.botoes_catalogo}>
                    <button id={styles.btn_pesquisar}>Pesquise...</button>
                    <button id={styles.btn_preco}>Menor Preço</button>
                    <button id={styles.btn_categoria}>Categoria</button>
                </div>

                <CardJogo />
            </main>
        </>
    )
}
export default ListaProduto;