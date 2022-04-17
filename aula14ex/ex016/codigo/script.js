function contar() {
    let inicio = document.getElementById('txtInicio')
    let fim = document.getElementById('txtFim')
    let passo = document.getElementById('txtPasso')
    let res = document.getElementById('res')

    if (inicio.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        res.innerHTML = 'Contando: '
    }
} 