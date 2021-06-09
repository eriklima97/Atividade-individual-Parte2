const prompt = require('prompt-sync')()

function main(){
    console.log('escreva o percentual de 14 dias atras e hoje e descubra o estado do avanço da doença')
    
    const variação1 = Number(prompt('escreva aqui a porcentagem da doença de 14 dias atras: '))
    const variação2 = Number(prompt('escreva aqui a porcentagem atual da doença: '))
    
    const variaçaoAtual = variação2 - variação1
    
   
    console.log('A variaçao percentual é', variaçaoAtual + '%')
    const percentual = calcular_percentual(variaçaoAtual)
}

function calcular_percentual(variaçaoAtual2){
    if(variaçaoAtual2 >= 15){
        console.log('em aumento')

    }else if (variaçaoAtual2 > 0){
        console.log('em estabilidade')

    }else{
        console.log('em queda')
    }
}


main()