const prompt = require('prompt-sync')()

function main(){
    console.log('escreva os valores de 0 a 100 e veja seu serasa score\n')

    const dados_positivos = Number(prompt('Escreva seus dados positivos: '))
    const dividas = Number(prompt('Escreva suas dividas: '))
    const consulta_contratos = Number(prompt('Escreva suas dividas: '))

    // Serasa 1.0
    const positivos = dados_positivos * (0.26) + (dados_positivos)
    const dividas1 = dividas * (0.57) + (dividas)
    const contratos = consulta_contratos * (0.17) + (consulta_contratos)

    // Serasa 2.0
    const positivos2 = dados_positivos * (0.62) + (dados_positivos)
    const dividas2 = dividas * (0.19) + (dividas)
    const contratos2 = contratos * (0.19) + (contratos)

    console.log('O seu Serasa Score 2.0 é: ', positivos2 + dividas2 + contratos2)
    console.log('O seu Serasa Score 1.0 é: ', positivos + dividas1 + contratos)
}


main()