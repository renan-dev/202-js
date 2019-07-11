let nomeAluno = prompt('Qual seu nome:');
let materia = prompt('Qual a materia:');
let nota = prompt('Qual sua nota:');

let media = 6;

if(Number(nota) >= media) {
    alert(`PARABÉNS VOCÊ FOI APROVADO EM ${materia.toUpperCase()} COM A NOTA ${nota}`);
}
else if(Number(nota) >= 5 || Number(nota) < 6){
    alert(`Com a nota ${nota} você ficou de RECUPERAÇÃO em ${materia.toUpperCase()}`);
}
else {
    alert(`Com a nota ${nota} você foi REPROVADO!!!`); 
}
