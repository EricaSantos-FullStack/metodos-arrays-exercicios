// crie um array com a nota implementada com 1 ponto que o professor deu

// tudo que o map faz é retornar um array atualizado, assim precisa salva-lo em uma nova variavel
// diferente do forEach que retorna o array normal sem atualizações

const notas = [10, 9, 8, 7, 6];

const notasAtualizadas = notas.map((nota) => (nota == 10 ? nota : ++nota));

console.log(notasAtualizadas);
