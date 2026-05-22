import Link from "next/link";
import styles from "./header.module.css"
import Botao from "../botao/botao";

type PropsHeader = {
    textoLink: string;
    textoBotao: string;
}

const Header = ({textoLink, textoBotao}: PropsHeader) => {
    return (
        <>
            <header id={styles.header}>
                <div className={`${styles.container} layout_guide`}>
                    <img src="./imgs/logo.svg" alt="Logo do Royal Games em tom rosa destaque." className={styles.logo} />
                    <nav className={styles.nav_menu}>
                        <a href="#catalogo" className={styles.catalogo_nav}>{textoLink}</a>
                        <Link href="/login">
                            <Botao className={styles.botao_header}>{textoBotao}</Botao>
                        </Link>
                    </nav>
                </div>
            </header>
        </>
    )
}
export default Header;