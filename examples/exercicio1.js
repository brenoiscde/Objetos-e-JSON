// Desafio 1: Criação de um Objeto
// Descrição: Crie um objeto chamado carro com as propriedades marca, modelo e ano.
// Depois, exiba no console o valor de cada propriedade.
const carro = {
    marca: "Toyota",
    modelo: "Supra-Turbo",
    ano: 1997
}
for(let chave in carro){
    console.log(carro[chave])
}
