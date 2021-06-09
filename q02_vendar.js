const prompt = require('prompt-sync')()

function main(){
    console.log('Escreva seu total de vendas e veja seu salario com comissao')

    const nome = String(prompt('Escreva se nome: '))
    const vendas = Number(prompt('Escreva seu total de vendas aqui: '))
    
    const salario_comissao = parseInt(1100 +comissao_vendas)
    

    console.log('Seu nome: ', nome)
    console.log('Seu salario com comissao é: ', salario_comissao)
    
}

function comissao_vendas(vendas){
    if(vendas > 30000){
        return -30000
}
}

main()