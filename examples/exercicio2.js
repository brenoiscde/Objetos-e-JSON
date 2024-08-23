// Desafio 2: Acesso e Modificação de Propriedades

// Descrição: Usando o objeto carro criado no Desafio 1, altere o valor da propriedade ano para 2023.
// Em seguida, adicione uma nova propriedade chamada cor com o valor "azul".
// Exiba o objeto atualizado no console.
// desafio 1:
const carro = {
    marca: "Toyota",
    modelo: "Supra-Turbo",
    ano: 1997
}
// desafio 2:
carro.ano = 2023;
carro.cor = "Azul";

for(let chave in carro){
    console.log(carro[chave])
}


