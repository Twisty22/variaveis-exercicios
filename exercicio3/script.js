const nomeCompleto = prompt("Digite o seu nome Completo")
const dataDeNascimento = prompt("Digite a sua data de nascimento")
let endereco = prompt("Digite o seu endereço")
const cpf = prompt("Digite o seu CPF")
let escolaridade = prompt("Digite o seu nível de escolaridade")
const chn = confirm("Você tem CNH?")
let quantidadeFilhos = Number(prompt("Digite quantos filhos tem"))
let cargoAtual = prompt("Digite o seu cargo atual")
let salario = Number(prompt("Digite o seu salário"))
let comissao = confirm("Você recebe comissão?")
const anoAdmissao= Number(prompt("Digite o ano de admissão"))
console.log(typeof nomeCompleto, typeof dataDeNascimento, typeof endereco, typeof cpf, typeof escolaridade,
     typeof chn, typeof quantidadeFilhos, typeof cargoAtual, typeof salario, typeof comissao, typeof anoAdmissao)
console.log(nomeCompleto, dataDeNascimento, endereco, cpf, escolaridade, chn, quantidadeFilhos, cargoAtual, salario, comissao, anoAdmissao)