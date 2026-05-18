import { ReactNode } from "react"
import styles from "./botao.module.css"

type PropsBotao = { // Props -> são a informações/dados que são enviadas para o componente (nesse caso o botão) e guardadas 
    children: ReactNode; // Componente vai aceitar conteúdo dentro dele(que pode mudar) e guardar, ex: o texto do botão 
    onClick?: () => void ; // Guardar uma função para o evento de clique, mas pode ser opcional, portanto não retorna nada(void)
}

const Botao = ({children, onClick}: PropsBotao) => { // Cria o componente que recebe como parâmetro as props(informações) do PropsBotao e guarda
    return (
        <button onClick={onClick} className={styles.botao} type="submit"> {/* onClick={onclick} -> Passa uma função q é executada ao clicar */}
            {children} {/* Botão vai ter o conteúdo(texto) que veio das props para mostrar na tela */}
        </button>
    )
}
export default Botao;