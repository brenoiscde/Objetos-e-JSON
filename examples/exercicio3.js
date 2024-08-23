// Desafio 3: Função Dentro de um Objeto

// Descrição: Adicione uma função chamada descrever dentro do objeto carro que
// retorne uma string descrevendo o carro, por exemplo,
// "Este carro é um [marca] [modelo] do ano [ano] na cor [cor].".
// Chame essa função e exiba o resultado no console.

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