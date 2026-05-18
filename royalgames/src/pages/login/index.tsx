import Botao from "@/components/botao/botao";
import styles from "./login.module.css"

const Login = () => {
    return (
        <>
            <main id={styles.main}>
                <div className={styles.imagem_mulher}>
                    <img src="./imgs/mulher_login.svg" alt="Mulher com visual futurista cyberpunk, usando acessório tecnológico neon nos olhos e tranças claras." />
                </div>
                    <div className={`efeito_vidro ${styles.form_login}`}>
                        <img  className={styles.logo} src="./imgs/logo.svg" alt="Logo do Royal Games em tom rosa destaque." />
                        <form id={styles.formulario} action="" >
                            <div className={styles.campo_form}>
                                <label htmlFor="email">Email</label>
                                <input type="text" name="email" required />
                            </div>
                            <div className={styles.campo_form}>
                                <label htmlFor="senha">Senha</label>
                                <input type="password" name="senha" required />
                            </div>
                            <Botao>Entrar</Botao>
                        </form>
                    </div>
            </main>
        </>
    )
}
export default Login;