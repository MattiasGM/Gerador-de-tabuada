verif.addEventListener('click', gerarTabuada)

function gerarTabuada() {

    var txtnum = window.document.querySelector('input#txtnum')
    var tipo = window.document.getElementsByName('opt')
    var res = window.document.querySelector('select#res')

    if(txtnum.value.length == 0) { //validação de caixa vazia
        alert('[ERRO] caixa vazia')
    } else {

        let tabuada = 10
        let sinal = ''
        let resultado = ''
        let num = Number(txtnum.value)

        res.innerHTML = ''
        for(let i = 0; i <= tabuada; i++) { //loop da criação da tabuada

            if(tipo[0].checked) { // soma
                sinal = '+'
                resultado = num + i
            } else if(tipo[1].checked) { // subtração
                sinal = '-'
                resultado = num - i
            } else if(tipo[2].checked) { // multiplicação
                sinal = 'x'
                resultado = num * i
            } else if(tipo[3].checked) { // divisão
                sinal = '/'
                resultado = num / i
            }

            let item = window.document.createElement('option') // criação do elemento option
            item.text = `${num} ${sinal} ${i} = ${resultado}` // criando o resultado visual
            res.value = `${i}` // atribuindo valor para as options *mais usado para php e outras linguagens*
            res.appendChild(item) // atribuindo o resultado visual na select
            
        }
    }
    
}