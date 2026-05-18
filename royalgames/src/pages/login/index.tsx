import { useState } from "react";
import styles from "./login.module.css"
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import { login } from "../api/authService";
import Botao from "@/components/botao/botao";

const Login = () => {

    const [email, setEmail] = useState<string>(""); // Cria um estado chamado email que inicia vazio e pode ser atualizado
    const [senha, setSenha] = useState<string>("");

    const router = useRouter(); // Permite navegar entre as páginas
    const notificacao = (msg: string) => toast.success(msg);
    const erro = (msg: string) => toast.error(msg);

async function autenticar(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault(); // Impede o comportamento padrão do formulário (recarregar a página) antes da requisição ser finalizada
    try {
            await login(email, senha);
            notificacao("Login bem sucedido!");
            setTimeout(() => {
                router.push("/home")
            }, 800);
        } catch (error: any) {
            erro(error.message);
        }
}

    return (
        <>
        <ToastContainer/>
            <main id={styles.main}>
                <div className={styles.imagem_mulher}>
                    <img src="./imgs/mulher_login.svg" alt="Mulher com visual futurista cyberpunk, usando acessório tecnológico neon nos olhos e tranças claras." />
                </div>
                    <div className={`efeito_vidro_card ${styles.form_login}`}>
                        <img className={styles.logo} src="./imgs/logo.svg" alt="Logo do Royal Games em tom rosa destaque." />
                        <form className={styles.formulario} onSubmit={autenticar} action="" >
                            <div className={styles.campo_form}>
                                <label htmlFor="email">Email</label>
                                {/* importando classe da global, por isso não coloca o styles. */}
                                <input className="efeito_vidro_input" type="text" name="email" required 
                                value={email} onChange={(e) => setEmail(e.target.value)} /> 
                            </div>
                            <div className={styles.campo_form}>
                                <label htmlFor="senha">Senha</label>
                                <input className="efeito_vidro_input" type="password" name="senha" required 
                                value={senha} onChange={(e) => setSenha(e.target.value)} />
                            </div>
                            <Botao className={styles.botao_entrar}>Entrar</Botao>
                        </form>
                    </div>
            </main>
        </>
    )
}
export default Login;