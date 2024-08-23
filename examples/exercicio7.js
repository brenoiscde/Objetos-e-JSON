// Desafio: Manipulando Dados em JSON
// Descrição: Você recebeu uma string no formato JSON representando uma lista de alunos e suas notas.
// Seu objetivo é converter essa string em um objeto JavaScript,
// calcular a média de notas de cada aluno, e exibir o nome do aluno com a maior média.

// desafio 1:
const carro = {
    marca: "Toyota",
    modelo: "Supra-Turbo",
    ano: 1997,
    descrever: function () {
        console.log(`Este carro é um ${carro.marca} ${carro.modelo} do ano ${carro.ano} na cor ${carro.cor}`)
    }
}

// desafio 2:
carro.ano = 2023;
carro.cor = "Azul";
carro.descrever()
/* for(let chave in carro){
    console.log(carro[chave])
}
 */
//desafio 4
function exibirChaveEValor(object) {
    for (let propriedade in object) {
        console.log(`${propriedade} : ${object[propriedade]}`)
    }
}
//desafio 5
function verificaPropriedade(object) {
    if ('preco' in object) {
        console.log(object.preco)
    }
    else {
        object.preco = 124.00
        console.log(`Nao tinha, mas adicionei\n ${object.preco}`)
    }
}
//desafio 6
function verificaSeDeletou(object) {
    delete object.cor
    console.log(object)
    if ("cor" in object) {
        console.log("Nao foi removido")
    }
    else {
        console.log("Removido com sucesso!")
    }

}
exibirChaveEValor(carro)
verificaPropriedade(carro)
verificaSeDeletou(carro)

const arquivoJASON = `[
    {
        "aluno": "breno",
        "notas": [1, 3, 0]
    },
    {
        "aluno": "breno",
        "notas": [1, 3, 0]
    },
]`

const arquivoJASONConvertido = JSON.parse(arquivoJASON);
console.log(arquivoJASONConvertido)