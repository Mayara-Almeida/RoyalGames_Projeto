import secureLocalStorage from "react-secure-storage";

export function verificarAutenticacao(){
    const Token = secureLocalStorage.getItem("Tokem");

    return !!Token; // !! -> pega o token e transforma em booleano
}