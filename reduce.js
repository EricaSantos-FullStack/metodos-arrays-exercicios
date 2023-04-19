// Com a média de todos os alunos de 3 salas, calcule a média geral de cada sala

const salaJavaScript = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaPython = [6, 5, 8, 9, 5, 6];
const salaRuby = [7, 3.5, 8, 9.5];

function mediaSala(notasDaSala) {
  //acumulando valores
  return (
    notasDaSala.reduce((acum, atual) => atual + acum, 0) / notasDaSala.length
  );
}

console.log(`Média da sala de JavaScript: ${mediaSala(salaJavaScript)}`);
console.log(`Média da sala de Python: ${mediaSala(salaPython)}`);
console.log(`Média da sala de Ruby: ${mediaSala(salaRuby)}`);

// outro exemplo de calculo de média
const notas = [10, 6.5, 8, 7];

const media = notas.reduce((acum, atual) => atual + acum, 0) / notas.length;

console.log(media);
