// Questão: Faça um sistema com uma função que leia o nome e retorna a média do aluno, caso o nome não se encontre na lista, retorne uma mensagem de erro.

const alunos = ["Maria", "Carlos", "Eduardo", "Samanta", "André", "Fernanda"];
const mediasDosAlunos = [10, 7, 9, 6, 5, 8];

let listaDeNotasEAlunos = [alunos, mediasDosAlunos];

//includes -> retorna boolean
//indexOf -> retorna o index (posição) na lista

const exibeNomeNota = (nomeDoAluno) => {
  if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
    let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno);
    return (
      listaDeNotasEAlunos[0][indice] +
      ", sua média é " +
      listaDeNotasEAlunos[1][indice]
    );
  } else {
    return "Aluno não está cadastrado";
  }
};

console.log(exibeNomeNota("Carlos"));
