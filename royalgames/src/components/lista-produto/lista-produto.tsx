import CardJogo from "../card-jogo/card-jogo";
import styles from "./lista-produto.module.css"

const ListaProduto = () => {
    return (
        <>
            <main id={styles.main}>
                <div className={`${styles.container_listagem} layout_guide`}>
                    <div className={styles.titulo}>
                        <h1>Lista de jogos</h1>
                        <hr />
                    </div>
                    <div className={styles.botoes_catalogo}>

                        <div>
                            <input className="efeito_vidro_input"
                                type="text"
                                name="pesquisa"
                                id=""
                                placeholder="Pesquise..." />
                        </div>

                        <select className="efeito_vidro_input">
                            <option value="todos">Todos</option>
                            <option value="menor_valor">Menor valor</option>
                            <option value="maior_valor">Maior valor</option>
                        </select>

                        <select className="efeito_vidro_input" name="generos" id="">
                            <option value="genero" selected>Gênero</option>
                        </select>
                    </div>
                <CardJogo />
                <CardJogo />
                <CardJogo />
                </div>
            </main>
        </>
    )
}
export default ListaProduto;