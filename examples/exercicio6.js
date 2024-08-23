// Desafio 6: Removendo uma Propriedade

// Descrição: Remova a propriedade cor do objeto carro.
// Em seguida, exiba o objeto atualizado no console para verificar se a propriedade foi removida.

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
//desafio 6
function verificaSeDeletou(object){
    delete object.cor
    console.log(object)
    if("cor" in object){
        console.log("Nao foi removido")
    }
    else{
        console.log("Removido com sucesso!")
    }
    
}
exibirChaveEValor(carro)
verificaPropriedade(carro)
verificaSeDeletou(carro)