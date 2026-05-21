import Link from "next/link";
import Botao from "../botao/botao";
import styles from "./card-jogo.module.css"
import { formatarPreco } from "@/utils/formatacao";

type Jogo = {
    img: string,
    nome: string,
    preco: number,
    jogoID: number,

    // onDelete: (produtoID: number) => void
}

const CardJogo = ({ img, nome, preco, jogoID }: Jogo) => {
    return (
        <>
            <article className={`${styles.card_jogo} efeito_vidro_card`}>
                <div className={styles.card_info}>
                    <Link href={"/detalhe-jogo/" + jogoID}>
                        <img src={img} alt="Produto vendido pela loja." className={styles.imagem_jogo} />
                    </Link>
                    <div className={styles.infos}>
                        <h3 className={styles.nome_jogo}>{nome}</h3>
                        <p className={styles.preco_jogo}>{formatarPreco(preco)}</p>
                    </div>
                    <div className={styles.botoes_baixo}>
                        <Botao className={styles.botoes}>Detalhes</Botao>
                        <Botao className={styles.botoes}>Editar</Botao>
                    </div>
                </div>
            </article>
        </>
    )
}
export default CardJogo;