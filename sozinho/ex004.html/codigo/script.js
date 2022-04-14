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
            if (idade >= 0 && idade < 11) {
                // Criança
                img.setAttribute('src', 'imagens/bebe-m.png')
            } else if (idade > 12 && idade <= 19) {
                // Jovem
                img.setAttribute('src', 'imagens/jovem-m.png')
            } else if (idade > 19 && idade <= 30) {
                // Adulto
                img.setAttribute('src', 'imagens/adulto-m.png')
            } else if (idade > 30 && idade <= 50) {
                // Adulto velho
                img.setAttribute('src', 'imagens/adulto-m-velho.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idoso-m.png')
            }
        } else if (fSex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 11) {
                // Criança
                img.setAttribute('src', 'imagens/bebe-f.png')
            } else if (idade > 12 && idade <= 19) {
                // Jovem
                img.setAttribute('src', 'imagens/jovem-f.png')
            } else if (idade > 19 && idade <= 30) {
                // Adulta
                img.setAttribute('src', 'imagens/adulto-f.png')
            } else if (idade > 30 && idade <= 50) {
                // Adulta velha
                img.setAttribute('src', 'imagens/adulto-f-velha.png')
            } else {
                // Idosa
                img.setAttribute('src', 'imagens/idosa-f.png')
            }
        }
    res.innerHTML = `Dectamos um(a) ${genero} com ${idade} anos.`
    res.style.textAlign = 'center' // alinha o texto no centro
    }
    res.appendChild(img) // adicionar um elemento
}