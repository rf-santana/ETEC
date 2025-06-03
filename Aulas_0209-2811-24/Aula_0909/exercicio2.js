/*
Desenvolva um programa que leia a idade do usuário e informe a categoria de filme adequada: "Livre", "12 anos", "14 anos", "16 anos" ou "18 anos".
*/

var idade = parseInt(prompt("Saiba qual a classificação dos filmes que, segundo as leis brasileiras, você pode assistir\nDigite sua idade: "));

if (idade < 12){
    console.log("Para a idade de " + idade + " anos a classificação é LIVRE!");
} else if (idade < 14){
    console.log("Para a idade de " + idade + " anos a classificação é 12 ANOS!");
} else if (idade < 16){
    console.log("Para a idade de " + idade + " anos a classificação é 14 ANOS!");
} else if (idade < 18){
    console.log("Para a idade de " + idade + " anos a classificação é 16 ANOS!");
} else if (idade >= 18){
    console.log("Para a idade de " + idade + " anos a classificação é 18 ANOS!");
} else {
    console.log("Digite uma idade válida!");
}