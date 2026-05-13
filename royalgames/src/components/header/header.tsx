import Link from "next/link";
import styles from "./header.module.css"

const Header = () => {
    return (
        <>
            <header id={styles.header}>
                <div className={`${styles.container} layout_guide`}>
                    <img src="./imgs/logo.svg" alt="Logo do Royal Games em tom rosa destaque." className={styles.logo} />
                    <nav id={styles.nav_menu}>
                        <a href="" className={styles.catalogo_nav}>Catálogo</a>
                        <Link href="/login">
                            <button className={styles.botao_login}>Login</button>
                        </Link>
                    </nav>
                </div>
            </header>
        </>
    )
}
export default Header;