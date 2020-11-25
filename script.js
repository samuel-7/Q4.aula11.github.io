function parquimetro() {
    var inValor = document.getElementById('inValor')
    var outTempo = document.getElementById('outTempo')
    var outTroco = document.getElementById('outTroco')

    var valor = Number(inValor.value)
    var respostaTempo = ""
    var respostaTroco = ""

    if (isNaN(valor)) {
        alert("'" + inValor.value + "'" + " Não é um valor válido!")
        inValor.focus()
        return

    } else if (valor < 1) {
        alert("Valor insuficiente!")
        inValor.focus()
        return

    } else if (valor >= 1 && valor < 1.75) {
        respostaTempo = "Tempo: 30 min"
        respostaTroco = "Troco R$: " + (valor - 1) + ".00"
        outTempo.textContent = respostaTempo
        outTroco.textContent = respostaTroco

    } else if (valor >= 1.75 && valor < 3) {
        respostaTempo = "Tempo: 60 min"
        respostaTroco = "Troco R$: " + (valor - 1.75) + ".00"
        outTempo.textContent = respostaTempo
        outTroco.textContent = respostaTroco

    } else if (valor >= 3) {
        respostaTempo = "Tempo: 120 min"
        respostaTroco = "Troco R$: " + (valor - 3) + ".00"
        outTempo.textContent = respostaTempo
        outTroco.textContent = respostaTroco
    }

}

var btMostrar = document.getElementById('btMostrar')
btMostrar.addEventListener('click', parquimetro)