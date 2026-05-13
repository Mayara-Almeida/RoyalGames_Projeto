import styles from "./footer.module.css"

const Footer = () => {
    return(
        <>
            <footer id={styles.footer}>
                <div className={`${styles.container} layout_guide`}>
                    <img src="./imgs/logo.svg" alt="Logo do Royal Games em tom rosa destaque." className={styles.logo} />
                    <div className={styles.infos}>
                        <p>royalgames@email.com</p>
                        <p>(11)99999-9999</p>
                        <p>@RoyalGames</p>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;