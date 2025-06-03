var valor = parseFloat(prompt("Digite o valor a converter:"));
var porcentagem = parseInt(prompt("Digite a porcentagem que deseja encontrar:"));

// Converte o numero inteiro para decimal 
// Só é possivel achar a % usando nuemro decimal
var porcentagemDecimal = porcentagem / 100; 
// Multiplica o valor pela porcentagem para encontrar o resultado
var resultado = valor * porcentagemDecimal;

console.log("O resultado é: " + resultado);