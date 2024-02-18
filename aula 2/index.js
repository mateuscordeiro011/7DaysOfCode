let nome = prompt("Digite seu Nome")
let idade = prompt("Digite sua idade")
let linguagem = prompt("Digite qual linguagem voce esta aprendendo")
let resposta = 1;

alert("Ola " + nome + " você tem " + idade + " anos e ja esta aprendendo " + linguagem)

resposta = prompt("Voce gosta de aprender " + linguagem + " ? Responde com 1 para SIM e 2 para NÃO.")

if(resposta === 1){
    alert("Muito bom! Continue estudando e você terá muito sucesso.")
} else {
    alert("Ahh que pena... Já tentou aprender outras linguagens?")
}