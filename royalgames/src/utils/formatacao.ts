export function formatarPreco(valor: number){
    return valor.toLocaleString("pt-BR", {
        style: "currency", // currency -> Formatar número para formato monetário(dinheiro)
        currency: "BRL" // BRL -> Formato brasileiro R$25,00
    })
}   