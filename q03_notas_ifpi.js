const prompt = require('prompt-sync')();

function principal() {
  console.log('leia as notas de um aluno e confira se ele foi aprovado\n');

  // Entrada
  let avs1 = Number(prompt('Primeira nota: ')),
    avs2 = Number(prompt('Segunda nota: '));
    atvs = Number(prompt('A nota das suas atividades: '))

  let media = ((avs1 * 2) + (avs2 * 3) + (atvs * 1)) / 6

  if (media >= 7) {
    // Saida: se passou no exame
    console.log('\nAprovado!');
  } else if(media <4) {
      console.log('\nreprovado')
  }else{
    // Processamento 1
    let result = passed(media);

    if (result = 6) {
      // Saída: se aprovado no exame final
      console.log('\nAprovado na prova final!')
    } else {
      // Saída: se reprovado no exame final
      console.log('\nReprovado na prova final!')
    }
  }
}


principal();

// Confira o resultado do exame final
function passed(avg) {
  let pf = Number(prompt('Nota da prova final: '));

  return ((pf + avg) / 2) 
}