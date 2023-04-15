// mostre o nome do aluno e a média dele através de dois arrays

const alunos = ["João", "Juliana", "Caio", "Ana"];

const mediasDosAlunos = [10, 7, 9, 6];
//							[0]        [1]
let listaDeNotasEAlunos = [alunos, mediasDosAlunos];

console.log(
  `${listaDeNotasEAlunos[0][0]}, sua média é ${listaDeNotasEAlunos[1][0]}`
);

//sendo o primeiro listaDeNotasEAlunos[0][0] significando array alunos e indice 0 desse array
// o segundo listaDeNotasEAlunos[1][0] significando array mediaDosAlunos e indice 0
