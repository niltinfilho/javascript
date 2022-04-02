function carregar() {
    var msg = document.querySelector('div#msg')
    var bom = document.querySelector('div#bom')
    var img = document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 6 && hora < 12) {
        // BOM DIA!
        img.scr = 'imagens/foto-manha.png'
        document.body.style.background = '#c3b187'
        bom.innerHTML = 'BOM DIA!'
    } else if (  hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'imagens/foto-tarde.png'
        document.body.style.background = '#b9846f'
        bom.innerHTML = 'BOA TARDE!'
    } else {
        // BOA NOITE
        img.src = 'imagens/foto-noite.png'
        document.body.style.background = '#3b3b3d'
        bom.innerHTML = 'BOA NOITE!'
    }
}