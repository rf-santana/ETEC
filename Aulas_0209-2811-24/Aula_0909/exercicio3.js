/*
Desenvolva um programa que calcule o valor do frete para uma compra: frete grátis para compras acima de R$ 300,00; caso contrário, calcule o frete de R$ 50,00.
*/

var compra = parseFloat(prompt("Veja se o valor de sua compra tem frete grátis.\nDigite o valor da compra: R$"));

if (compra >= 300) {
    console.log("Frete grátis!!!");
    console.log("Total a pagar: R$ " + compra + ",00!!!");
} else if (compra > 0) {
    totalcompra = compra + 50;
    console.log("Frete de R$ 50,00!");
    console.log("O valor total da compra mais o frete é de: R$" + totalcompra + ",00!!!");
} else {
    console.log("Digite um valor válido!!!");
}