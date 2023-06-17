


let funcionPredeterminada= () => {

    const formulario = document.getElementById('formulario')

    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault()
        let valorPorHora = parseFloat(document.getElementById('valorPorHora').value)
        let interfaz = parseFloat(document.getElementById('interfazHoras').value)
        let html= parseFloat(document.getElementById('htmlHoras').value)
        let css = parseFloat(document.getElementById('cssHoras').value)

        let resultado = parseFloat((valorPorHora * interfaz) + (valorPorHora * html) + (valorPorHora * css))

        document.getElementById('valorTotal').value = "$"+resultado
    })

}

funcionPredeterminada();