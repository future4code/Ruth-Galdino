/*1) interpretação
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)--false

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado)--false

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)--true

console.log("e. ", typeof resultado)--booleano*/

/*2) interpretação
let array
console.log('a. ', array)-- underfined(variavel vazia)

array = null
console.log('b. ', array)--null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)--10(começa a contar do 0)

let i = 0
console.log('d. ', array[i])--3

array[i+1] = 19
console.log('e. ', array)--11

const valor = array[i+6]
console.log('f. ', valor)--6*/

/*1) escrita de código
a) idade do usuario*/

/*let idade = Number (prompt("Qual sua idade?" ))
console.log(idade);


b) idade do melhor amigo(a)

let idadeMelhorAmiga= Number(prompt("Qual a idade da sua melhor amiga?"))
console.log(idadeMelhorAmiga);

C) Sua idade é maior do que a do seu melhor amigo?

const resultado = (idade > idadeMelhorAmiga)
console.log("Minha idade é maior que a da minha amiga?" + (resultado))


d)  diferença de idade
console.log("A diferença de idade é de "+  (idade - idadeMelhorAmiga))*/

/* 2.a)  insira um número par.

let numero = Number(prompt("digite um numero par"))

/* b) o resto da divisão desse número por 2
const resultado = (numero %2)
console.log("Resto da divisão é " + (resultado))*/

/*c)Escreva em um comentário de código.

todo numero par que eu boto ,resto da divisão é 0*/

/*d) numero impar, comentario
 todo numero impar que eu boto, o resto da divisão é 1*/

 /*3.a) lista de tarefas vazia*/

 /*let listaDeTarefas
 console.log('', listaDeTarefas)*/

 /*b)  3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array*/

 /*let listaDeTarefas=[]

listaDeTarefas.push(prompt("Digite uma tarefa que você precisa fazer hoje"))
listaDeTarefas.push(prompt("Digite a segunda tarefa que você precisa fazer hoje"))
listaDeTarefas.push(prompt("Digite a terceira tarefa que você precisa fazer hoje"))
/*c) imprimir na tela
console.log(listaDeTarefas)

/*d)  digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2 

let tarefasFeitas= Number(prompt('digite qual tarefa você realizou: 0,1 e/ou 2'))*/

/*e)  Remova da lista o item de índice que o usuário escolheu.
listaDeTarefas.slice(Number(tarefasFeitas),0)
console.log(listaDeTarefas)*/


/*4*/
let nome = prompt('Qual seu nome?')
let email = prompt('Qual seu email?')
console.log('O e-mail' + (email) + 'foi cadastrado com sucesso. Seja bem-vinda(o),' + (nome) +'!')





