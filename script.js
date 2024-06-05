<script src="script.js"></script>
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "qual o maior artilheiro a copa do mundo",
        alternativas: [
            "Miroslav Klose ",
            "Ronaldo fenomeno"
        ]
    },
    {
        enunciado: "Qual a seleção com mais titulos de copa do mundo",
        alternativas: [
            "Brasil",
            "Alemanha"
        ]
    },
    {
        enunciado: "qual seleção que ganhou a copa de 1998? "
    ",
        alternativas: [
            "França",
            "Brasil"
        ]
    },
    {
        enunciado: "Qual o jogador com amis titulos de copa do mundo",
        alternativas: [
            "Pelé",
            "Cafu"
        ]
    },
    {
        enunciado: "qual a seleçao com mais titulos de copa do mundo ,
        alternativas: [
            "Brasil",
            "Alemanha"
        ]
    }
]

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativa.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();
