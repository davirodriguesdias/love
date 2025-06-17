

function Contador() {

    var text = document.getElementById('con')

    var hoje = new Date()
    var destino = new Date('2026-01-04T00:00:00')

    var dif = destino - hoje

    resto = Math.floor(dif/(1000*60*60*24))

    text.innerHTML = `Dias restantes: ${resto}`
}
