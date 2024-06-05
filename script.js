<script src="script.js"></script>
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "qual e a seleção que mais tem titulos de Copa do mundo",
        alternativas: [
            "alemanha",
            "brasil"
        ]
    },
    {
        enunciado: "qual o maior artilheiro da historia da Copa do mundo ",
        alternativas: [
            "Miroslav Klose  ",
            "Ronaldo Fenômeno "
        ]
    },
    {
        enunciado: "Qual o jogador que mais tem titulo da copa do mundo"
        alternativas: [
            "Pelé",
            "Cafu"
        ]
    },
    {
        enunciado: "Qual pais foi campeão no ano de 1998",
        alternativas: [
            "França",
            "Alemanha"
        ]
    },
    {
        enunciado: "Quem foi o primeiro campeão da copa do mundo  ",
        alternativas: [
            "Uruguai",
            "Brasil"
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
