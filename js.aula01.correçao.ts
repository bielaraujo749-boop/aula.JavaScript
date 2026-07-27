const nomeTurma: string = "JavaScript Básico";
const totalAlunos: number = 29;
let somaNotas: number = 0;

for (let i = 0; i < totalAlunos; i++) {
const notaAtual = 8.5 * 1.5;
somaNotas += notaAtual;
}

let statusturma;
const media = somaNotas / totalAlunos;

if (media >= 7) {
    statusturma = "Aprovado!";
} else if ( media <= 5 && media < 7) {
    statusturma = "Em Recuperação!";
} else {
    statusturma = "Reprovado!";
}

console.log(`O status da turma é: ${statusturma}`);
console.log(`A nota total foi de  ${somaNotas}`);
console.log(`A média da turma foi: ${media}`);

let regressiva = 5;
while (regressiva > 0) {
    console.log(`Encerrando o sistema em ${regressiva} ...`)
}

console.log(`Sua média é de ${media}. Você está ${statusturma}`)


