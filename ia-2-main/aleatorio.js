const nome [Tomas,Isaque, Eliza, Sara, Diana, Nick, Bob  ]

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)
