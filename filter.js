// DESAFIO: Depois de calcular a média dos alunos, mostre quem está reprovado

// filter() retorna true ou false
// Quando a função callback retorna verdadeiro, ou true, o elemento é adicionado no array de retorno, e quando ela retorna falso, ou false, o elemento é descartado.

const nomes = ["Ana", "Marcos", "Maria", "Mauro"];
const notas = [7, 4.5, 8, 7.5];

const reprovados = nomes.filter((aluno, indice) => notas[indice] < 5);
// ou
// const reprovados = nomes.filter((_, indice) => notas[indice] < 5);

console.log(`reprovados: ${reprovados}`);
