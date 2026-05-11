import styles from "./login.module.css"

const Login = () => { 
    return( 
        <> 
            <main id={styles.main}>
                <img src="./imgs/mulher_login.svg" alt="Mulher com visual futurista cyberpunk, usando acessório tecnológico neon nos olhos e tranças claras." className={styles.imagem_mulher}/>
                <div id={styles.campo_login}>
                    <img src="./imgs/logo_login.svg" alt="Logo do Royal Games em tom rosa destaque." className={styles.logo}/>
                    <form action="" id={styles.formulario}>
                        <div className={styles.campo_form}>
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" required/>
                        </div>
                        <div className={styles.campo_form}>
                            <label htmlFor="senha">Senha</label>
                            <input type="password" name="senha" required/>
                        </div>
                        <button className={styles.botao}>Entrar</button>
                    </form>
                </div>
            </main>
        </>
    )
}
export default Login;