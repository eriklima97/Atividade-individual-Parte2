const prompt = require('prompt-sync')()

function main(){
    console.log('\nreceba dois dados: Leitura Atual e Leitura Anterior e faça todo o cálculo do "Talão de Energia"\n')

    const consumo1 = Number(prompt('escreva aqui a leitura do mês passado: '))
    const consumo2 = Number(prompt('escreva aqui a leitura do mês atual: '))

    const consumo_mes = consumo2 - consumo1
    const bandeira = bandeira_100(consumo_mes)
    const valor_total = consumo_mes * tarifa(consumo_mes)
    const valor_tarifa = tarifa(consumo_mes)
    const icms = valor_total * 0.25
    const confis = valor_total * 0.15
    const taxa_ilu = valor_total * 0.06

    console.log('O consumo:', consumo_mes+ 'KWh')
    console.log('a bandeira é:', bandeira)
    console.log('O valor faturado é:', valor_total+icms+confis+taxa_ilu+'R$' )
    console.log('O icms é: ', icms+'R$')
    console.log('O PIS/CONFIS é: ', confis+'R$')
    console.log('A taxa de iluminação é: ', taxa_ilu+'R$')
}

function bandeira_100(consumo_mes){
    if (consumo_mes >= 500){
        return +40
    
    }else if(consumo_mes >= 400){
        return +32
    
    }else if (consumo_mes >= 300){
        return +24

    }else if(consumo_mes >= 200){
        return +16
        
    }else if(consumo_mes >= 100){
        return +8
    }else{
        return +0
    }
}

function tarifa(consumo_mes1){
    if(consumo_mes1 >= 100){
        return +0.75

    }else if(consumo_mes1 >= 30 && consumo_mes1 <100){
        return +0.59
    }else{
        return +0
    }
}


main()