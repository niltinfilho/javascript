function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if (formAno.value.length == 0 || Number(formAno.value) > ano || Number(formAno.value) < 1903) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var formSex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (formSex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 11) {
                //Criança
                img.setAttribute('src', 'imagens/bebe-m.png' )
            } else if (idade >11 && idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/jovem-m.png')
            } else if (idade >= 21 && idade < 35) {
                // Adulto
                img.setAttribute('src', 'imagens/adulto-m.png')
            } else if (idade >= 35 && idade < 55) {
                img.setAttribute('src', 'imagens/adulto-m-velho.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idoso-m.png')
            }
        } else if (formSex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 11) {
                // Crinça
                img.setAttribute('src', 'imagens/bebe-f.png')
            } else if (idade > 11 && idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/jovem-f.png')
            } else if (idade >= 21 && idade < 35) {
                // Adulto
                img.setAttribute('src', 'imagens/adulto-f.png')
            } else if (idade >= 35 && idade < 55) {
                img.setAttribute('src', 'imagens/adulto-f-velha.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idosa-f.png')                
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}