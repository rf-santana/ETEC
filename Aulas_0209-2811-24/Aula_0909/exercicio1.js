/*
Crie um programa que leia um número inteiro e informe se ele é positivo, negativo ou zero.
 */

var numero = parseInt(prompt("Descubra se um número inteiro qualquer é POSITIVO ou NEGATIVO!!!\nDigite um número inteiro: "));

if (numero > 0) {
    console.log("O número [" + numero + "] é POSITIVO!!!");
} else if (numero < 0) {
    console.log("O número [" + numero + "] é NEGATIVO!!!");
}else if (numero == 0) {
    console.log ("O número [" + numero + "] é ZERO!!!");
}else {
    console.log("Digite um número VÁLIDO!!!");
}