


let funcionPredeterminada= () => {

    const formulario = document.getElementById('formulario')

    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault()
        let valorPorHora = parseFloat(document.getElementById('valorPorHora').value)
        let interfaz = parseFloat(document.getElementById('interfazHoras').value)
        let html= parseFloat(document.getElementById('htmlHoras').value)
        let css = parseFloat(document.getElementById('cssHoras').value)
        let js = parseFloat(document.getElementById('jsHoras').value)
        let apis = parseFloat(document.getElementById('apisHoras').value)
        let adicionales = parseFloat(document.getElementById('adicionalesHoras').value)
        let experiencia = parseFloat(document.getElementById('experiencia').value)

        let resultado = parseFloat(((valorPorHora * interfaz) + (valorPorHora * html) + (valorPorHora * css) 
        + (valorPorHora * js) + (valorPorHora * apis) + (valorPorHora * adicionales))*experiencia)

        document.getElementById('valorTotal').value = "$"+resultado
    })

}

funcionPredeterminada();