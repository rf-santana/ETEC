/*
Crie um programa que leia um número inteiro e informe se ele é par ou impar.
*/

var numero = parseInt(prompt("Descubra se um número inteiro qualquer é ÍMPAR ou PAR!!!\nDigite um número inteiro: "));

if (numero % 2 == 0) {
    console.log("O número " + numero + " é PAR!");
} else if (numero % 2 == 1) {
    console.log("O número " + numero + " é ÍMPAR!");
}else {
    console.log("O número digitado é inválido!");
}