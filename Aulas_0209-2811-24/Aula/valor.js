var Produto = prompt("Digite o nome do produto:");
var Quantidade = parseFloat(prompt("Digite a quantidade vendida:"));
var Valor = parseFloat(prompt("Digite o valor:"));
var valorTotal = Quantidade * Valor;
var Porcentagem = parseFloat(prompt("Digite a porcentagem:"));
var porcentagemDecimal = Porcentagem / 100;
var valorDesconto = valorTotal * porcentagemDecimal;
var totalDesconto = valorTotal - valorDesconto;
console.log ("O valor total da venda com desconto será :" + totalDesconto)
