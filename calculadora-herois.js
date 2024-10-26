let nomeHeroi = "Princesa Elsa"
let nivelHeroi

let total = calculadora(500, 350)

function calculadora(numA, numB){
    let resultado = numA - numB
    return resultado

}

if (total < 10) {
    nivelHeroi = "Ferro";
} else if (total >= 11 && total <= 20) {
    nivelHeroi = "Bronze";
} else if (total >= 21 && total <= 50) {
    nivelHeroi = "Prata";
} else if (total >= 51 && total <= 80) {
    nivelHeroi = "Ouro";
} else if (total >= 81 && total <= 90) {
    nivelHeroi = "Diamante";
} else if (total >= 91 && total <= 100) {
    nivelHeroi = "Landário";
} else if (total >= 101) {
    nivelHeroi = "Imortal";
}

console.log("O Herói tem de saldo de " + total + " vitórias e está no nível " + nivelHeroi)