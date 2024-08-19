const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const caixaResultado1 = document.querySelector(".caixa-principal");

const perguntas = [
    {
        enunciado: "Você costuma ouvir música todos os dias?",
        alternativas: [
            {
                texto: "Não!",
                afirmacao: ["Não ouve música todos os dias. ",
                "Prefere ouvir de vez enquando."
            ]
            }
            },

            {
                texto: "Sim é maravilhoso!",
                afirmacao: ["Ouve música todos os dias.",
                "Gosta de uma trilha sonora em todas as ocasiões"
            ]
            }
        ]
    },

    {
        enunciado: "Você tem um gosto musical, eclético?",
        alternativas: [
            {
                texto: "Não",
                afirmacao: ["Gosta apenas de tipos específicos de música. ",
                "Escuta somente alguns tipos de música em seu dia a dia"
            ]
            },
            {
                texto: "Sim",
                afirmacao: ["Ouve vários tipos de música.",
                "Vátios tipos músicais o agradam"
            ]
            }
        ]
    },

    {
        enunciado: "funk é música?",
        alternativas: [
            {
                texto: "Não!",
                afirmacao: ["É uma poluição sonora. ",
                "Não gosta de funk"
            ]
            },
            {
                texto: "Sim!",
                afirmacao: ["Gosta de funk.",
                "Escuta funk"
            ]
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    function mostraAlternativas(){
        for(const alternativa of perguntaAtual.alternativas) {
            const botaoAlternativas = document.createElement("button");
            botaoAlternativas.textContent = alternativa.texto;
            botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
            caixaAlternativas.appendChild(botaoAlternativas);
        }
    }

    function respostaSelecionada(opcaoSelecionada) {
        const afirmacoes = opcaoSelecionada.afirmacao;
        historiaFinal += afirmacoes + " ";
        atual++;
        mostraPergunta();
    }
    
    function mostraResultado() {
        caixaPerguntas.textContent = "Em 2049...";
        textoResultado.textContent = historiaFinal;
        caixaAlternativas.textContent = "";
    }
    
    function aleatorio (lista) {
        const posicao = Math.random()*lista.length;
    }


    mostraPergunta();