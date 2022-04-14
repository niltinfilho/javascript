function verificar() {
    var data = new Date()
    var ano = data.getFullYear() // pega o ano atual
    var formAno = document.getElementById('txtAno') // pega o ano de nascimento
    var res =  document.querySelector('div#res')
    if (formAno.value == 0 || Number(formAno.value) > ano || formAno.value < 1903) { // se o valor for igual a 0, maior que o ano atual, ou menor que 1903, vai dar erro
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fSex = document.getElementsByName('radSex') // pega o valor do sexo
        var idade = ano - Number(formAno.value) // calcula a idade da pessoa
        var genero = ''
        var img = document.createElement('img') // cria uma tag img no html
        img.setAttribute('id', 'foto') // da um id pra tag img, 'foto'
        if (fSex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < )
        } else if (fSex[1].checked) {
            genero = 'mulher'
        }
    res.innerHTML = `Dectamos um(a) ${genero} com ${idade} anos.`
    res.style.textAlign = 'center' // alinha o texto no centro
    }

}