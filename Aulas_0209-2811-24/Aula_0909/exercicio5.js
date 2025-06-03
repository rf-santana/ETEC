/*
Elabore um algoritmo que calcule o valor a ser pago por um produto considerando a quantidade, o preço e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir e efetuar o cálculo adequado.
Código =>  Condição Pagamento
1      => À vista, dinheiro ou cheque, 10% de desconto
2      => À vista, cartão de credito, 5% de desconto
3      => Em 2 vezes, preço sem juros
4      => Em 3 vezes, preço + 10% de juros
*/
      
var valor = parseFloat(prompt("Faça sua compra e escolha a condição de pagamento que melhor o satisfaz!!!\nDigite o valor unitário do produto: R$ "));
var qtde = parseInt(prompt("Digite a quantidade desejada: "))
var opcao = parseInt(prompt("Digite a opção desejada: "));
var opcaoUm = valor * qtde * 0.1;
var opcaoDois = (valor * qtde) * 0.05;
var opcaoTres = (valor * qtde) / 2;
var opcaoQuatro = ((valor * qtde) + opcaoUm) / 3
if (opcao == 1) {
    console.log("Pagamento em parcela ÚNICA e À VISTA com 10% de DESCONTO.");
    console.log("O valor a ser pago é de: R$ " + ((valor * qtde) - opcaoUm));
} else if (opcao == 2) {
    console.log("Pagamento em parcela ÚNICA, no CARTÃO DE CRÉDITO, À VISTA e com 5% de DESCONTO.");
    console.log("O valor a ser pago é de: R$ " + ((valor * qtde) - opcaoDois));
} else if (opcao == 3) {
    console.log("Pagamento parcelado em 2 vezes, SEM JUROS.");
    console.log("Serão 2 parcelas no valor de: R$ " + opcaoTres + " cada.");
} else if (opcao == 4) {
    console.log("Pagamento parcelado em 3 vezes, com 10% de JUROS.");
    console.log("Serão 3 parcelas no valor de: R$ " + opcaoQuatro + " cada.");
}else {
    console.log("Digite um valor VÁLIDO.");
}