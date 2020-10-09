/***************************************** EXERCÍCIO 1**********************************************/

/*const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")

}/*ele imprime "passou no teste" para números pares (se o resto da divisão for igual a zero); senão, ele não passa no teste.*/



/***********************************************EXERCÍCIO 2**********************************************/

/*let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)*/
/*a) digitar a fruta que você quer e verificar o preço do mesmo.
b) é impresso "O preço da fruta  maçã  é  R$  5"
c) se retirarmos o break ele vai imprimir erro de sintaxe.*/



/********************************************* EXERCICIO 3**************************************************** */

/*const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem) */

/*a) ta pedindo pra o usuário digitar um número, no qual esse número vai ser convertido para o tipo number e ser armazenado em uma variável;
b)  se digitar o número 10 vai imprimir "esse número passou no teste" e se botar -10 não acontece nada porque não se aplica a regra 
c) sim, pois a variavel foi criada fora do escopo, ao invés de ser criada dentro   */   


/******************************************* EXERCÍCIO 4 *****************************************************/

/*let idade = Number(prompt("Digite sua idade: "))

if (idade >= 18)   {
    console.log("Você pode dirigir :) ! ")
} else
    console.log("Você não pode dirigir :/ ! ")*/


/****************************************** EXERCÍCIO 5 *****************************************************/

/*let turno = prompt("Qual turno você estuda? Digite 'M' (Matutino), 'V' (Vespertino) ou 'N' (Noturno) ").toUpperCase()

if (turno ==='M'){
    console.log('Bom dia!')
} else {
    if (turno ==='V') {
        console.log("Boa tarde!")

} else{
    console.log("Boa noite!")
}
}   /*
/******************************************* EXERCÍCIO 6 ***************************************************/

/*let turno = prompt("Qual turno você estuda? Digite 'M' (Matutino), 'V' (Vespertino) ou 'N' (Noturno) ").toUpperCase()

switch(turno)  {
    case 'M':
       console.log("Bom dia!")
       break

    case "V":
        console.log("Boa tarde!")
        break
    
    case "N":
        console.log("Boa noite!")
        break

    default:
        console.log("LEIA ATENTAMENTE O QUE FOR PEDIDO E TENTE NOVAMENTE !")

}  */


/****************************************** EXERCÍCIO 7 ******************************************************/

/*let filme = prompt("Qual gênero de filme você vai asssistir?")
let preço = Number(prompt("Qual o preço do ingreço?"))

if (preço < 15){
    console.log("Bom filme!")
}else {
    console.log("escolha outro filme!")
}*/ 



/****************************************** DESAFIO 1 ***********************************************/

let filme = prompt("Qual gÊnero de filme você vai assistir?")
let preço = Number(prompt("Qual o preço do ingresso?"))
let snack = prompt("Qual snack você vai querer? Digite:  pipoca, chocolate, chiclete ").toLowerCase()

if (preço <= 15){
    console.log("Bom filme!")
}else {
    console.log("escolha outro filme!")

}
switch (snack){
    case "pipoca":
        console.log("e aproveite sua pipoca")
        break

    case "chocolate":
        console.log(" e aproveite seu chocolate")
        break

    case "chiclete":
        console.log("e aproveite seu chiclete")
        break

    default:
        console.log("Escolha as opções apresentadas e tente novamente!")
    

}


/*********************************************** DESAFIO 2 *******************************************/

/*const nome = prompt("Insira seu nome.").toLocaleLowerCase()
const jogo = prompt("Insira o tipo de jogo que você deseja ver DO(Doméstico ou IN(Internacional)").toUpperCase()
const jogoEtapa = prompt("Insira a etapa do jogo SF(Semi-final), DT(Decisão de terceiro lugar ou FI(Final)").toUpperCase()
const categoria = Number(prompt("Insira a categoria: 1,2,3 ou 4"))
const ingressoQuantidade = Number(prompt("Insira a quantidade de ingressos que você deseja:"))*/

