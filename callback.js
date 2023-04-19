const nomes = ["Ana", "Juliana", "Leo", "Paula"];

// é possivel passar uma função fora do parametro do forEach
// é possivel usar o indice como segundo parametro
nomes.forEach(imprimeNomes);

function imprimeNomes(nome) {
  console.log(nome);
}
