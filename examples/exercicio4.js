// Desafio 4: Iterando sobre as Propriedades
// Descrição: Crie uma função que receba um objeto como parâmetro e itere sobre suas propriedades,
// exibindo cada chave e valor no console.
// Use o objeto carro como argumento para testar a função.

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
exibirChaveEValor(carro)