/* Calculadora de Imposto de Renda: Crie um programa que leia a renda anual de um usuário e calcule o imposto a ser pago com base nas faixas:
 até R$ 22.847,76 (isento), de R$ 22.847,77 a R$ 33.919,80 (7,5%), de R$ 33.919,81 a R$ 45.012,60 (15%) e acima (22,5%). 
Apresente o valor digitado e o valor do imposto a ser pago. */

var salario = parseFloat(prompt("Digite seu salário bruto: "));
var faixa = (salario * 0.075)
var faixaDois = (salario * 0.15)
var faixaTres = (salario * 0.225)

if (salario <= 22847.76){
    console.log("Seu rendimento anual é: R$ " + salario);
    console.log("A faixa IR a ser abatida é de: Isento");
    console.log("O valor a ser descontado será de: Isento")
} else if (salario < 33919.81){
    console.log("Seu rendimento anual é: R$ " + salario);
    console.log("A faixa IR a ser abatida é de: 7,5%");
    console.log("O valor a ser descontado será de: R$ " + faixa)
} else if (salario < 45012.61){
    console.log("Seu rendimento anual é: R$ " + salario);
    console.log("A faixa IR a ser abatida é de: 15%");
    console.log("O valor a ser descontado será de: R$ " + faixaDois) 
} else{
    console.log("Seu rendimento anual é: R$ " + salario);
    console.log("A faixa IR a ser abatida é de: 22,5%");
    console.log("O valor a ser descontado será de: R$ " + faixaTres)
}  
    