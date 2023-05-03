/*let nome
let idade
console.log(typeof nome, typeof idade)
//o tipo impresso é undefined porque eu nao atribui nenhum valor às variáveis*/

let nome = prompt("Qual o seu nome?")
let idade = Number(prompt("Qual a sua idade?"))
console.log(typeof nome, typeof idade)
console.log("Olá," , nome,"você tem" , idade, "anos.")
/*Os tipos impressos são string e number porque eu atribui um valor às variáveis, que o usuário nos dará,
 no caso do number eu casteei a string recebida pela função propmt para um número*/ 