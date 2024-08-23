// Desafio 5: Verificando a Existência de Propriedades

// Descrição: Verifique se o objeto carro tem uma propriedade chamada preco.
// Se não tiver, adicione a propriedade com um valor de sua escolha.
// Se já existir, exiba o valor no console.

// desafio 1:
const carro = {
    marca: "Toyota",
    modelo: "Supra-Turbo",
    ano: 1997,
    descrever: function(){
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
function exibirChaveEValor(object){
    for(let propriedade in object){
        console.log(`${propriedade} : ${object[propriedade]}`)
    }
}
//desafio 5
function verificaPropriedade(object){
    if('preco' in object){
        console.log(object.preco)
    }
    else{
        object.preco = 124.00
        console.log(`Nao tinha, mas adicionei\n ${object.preco}`)
    }
}

exibirChaveEValor(carro)
verificaPropriedade(carro)