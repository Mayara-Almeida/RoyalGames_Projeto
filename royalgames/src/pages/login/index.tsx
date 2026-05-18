import Botao from "@/components/botao/botao";
import styles from "./login.module.css"

const Login = () => {
    return (
        <>
            <main id={styles.main}>
                <div className={styles.imagem_mulher}>
                    <img src="./imgs/mulher_login.svg" alt="Mulher com visual futurista cyberpunk, usando acessório tecnológico neon nos olhos e tranças claras." />
                </div>
                    <div className={`efeito_vidro_card ${styles.form_login}`}>
                        <img className={styles.logo} src="./imgs/logo.svg" alt="Logo do Royal Games em tom rosa destaque." />
                        <form className={styles.formulario} action="" >
                            <div className={styles.campo_form}>
                                <label htmlFor="email">Email</label>
                                <input className="efeito_vidro_input" type="text" name="email" required /> {/* importando classe da global, por isso não coloca o styles. */}
                            </div>
                            <div className={styles.campo_form}>
                                <label htmlFor="senha">Senha</label>
                                <input className="efeito_vidro_input" type="password" name="senha" required />
                            </div>
                            <Botao className={styles.botao_entrar}>Entrar</Botao>
                        </form>
                    </div>
            </main>
        </>
    )
}
export default Login;