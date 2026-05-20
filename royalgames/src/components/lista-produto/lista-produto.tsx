import CardJogo from "../card-jogo/card-jogo";
import styles from "./lista-produto.module.css"

const ListaProduto = () => {
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
                        <CardJogo />
                        <CardJogo />
                        <CardJogo />
                    </div>
                    <div className={styles.cards}>
                        <CardJogo />
                        <CardJogo />
                        <CardJogo />
                    </div>
                </div>
            </main>
        </>
    )
}
export default ListaProduto;