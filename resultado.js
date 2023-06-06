const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

let nome = urlParams.get('nome')
let altura = urlParams.get('altura')
let peso = urlParams.get('peso')

if(!nome) {
    nome = "N/A"
}
if(!altura) {
    altura = "N/A"
}
if(!peso) {
    peso = "N/A"
}

const resultado = document.getElementById("resultado")

let alturaNum = parseFloat(altura.replace(',', '.'))
let pesoNum = parseFloat(peso.replace(',', '.'))


if(isNaN(alturaNum) || isNaN(pesoNum)) {
    resultado.innerText += "Bem vindo "+nome+".\n\n"
    if(isNaN(alturaNum)) {
        resultado.innerText += "A altura informada \""+altura+"\" não é um float válido.\n\n"
    }
    if(isNaN(pesoNum)) {
        resultado.innerText += "O peso informado \""+peso+"\" não é um float válido."
    }

    resultado.innerHTML = resultado.innerHTML.replace(nome, "<b>"+nome+"</b>")
    resultado.innerHTML = resultado.innerHTML.replace(altura, "<b>"+altura+"</b>")
    resultado.innerHTML = resultado.innerHTML.replace(peso, "<b>"+peso+"</b>")
    if(isNaN(alturaNum)) {
        resultado.innerHTML = resultado.innerHTML.replace("um float válido", "um <b>float válido</b>")
    }
    if(isNaN(pesoNum)) {
        resultado.innerHTML = resultado.innerHTML.replace("um float válido", "um <b>float válido</b>")
    }
}else {
    resultado.innerText += "Bem vindo "+nome+".\n\n"
    let imc = pesoNum/(alturaNum*alturaNum)
    resultado.innerText += "Seu IMC é "+imc.toFixed(2)+".\n"
    if(imc < 18.5) {
        resultado.innerText += "Seu peso está abaixo do normal.\n"
        resultado.innerText += "Risco de comorbidades: Baixo.\n"
    }else if(imc < 25) {
        resultado.innerText += "Seu peso está normal.\n"
        resultado.innerText += "Risco de comorbidades: Médio.\n"
    }else if(imc < 30) {
        resultado.innerText += "Seu peso está acima do normal.\n"
        resultado.innerText += "Risco de comorbidades: Aumentado.\n"
    }else if(imc < 35) {
        resultado.innerText += "Seu peso está muito acima do normal (Obeso 1).\n"
        resultado.innerText += "Risco de comorbidades: Moderado.\n"
    }else if(imc < 40) {
        resultado.innerText += "Seu peso está muito acima do normal (Obeso 2).\n"
        resultado.innerText += "Risco de comorbidades: Grave.\n"
    }else{
        resultado.innerText += "Seu peso está muito acima do normal (Obeso 3).\n"
        resultado.innerText += "Risco de comorbidades: Muito grave.\n"
    }

    resultado.innerHTML = resultado.innerHTML.replace(nome, "<b>"+nome+"</b>")
    resultado.innerHTML = resultado.innerHTML.replace(imc.toFixed(2), "<b>"+imc.toFixed(2)+"</b>")
    resultado.innerHTML = resultado.innerHTML.replace("muito acima do normal", "<b>muito acima do normal</b>")
    resultado.innerHTML = resultado.innerHTML.replace("acima do normal", "<b>acima do normal</b>")
    resultado.innerHTML = resultado.innerHTML.replace("abaixo do normal", "<b>abaixo do normal</b>")
    resultado.innerHTML = resultado.innerHTML.replace("normal", "<b>normal</b>")
    resultado.innerHTML = resultado.innerHTML.replace("Baixo", "<b>Baixo</b>")
    resultado.innerHTML = resultado.innerHTML.replace("Médio", "<b>Médio</b>")
    resultado.innerHTML = resultado.innerHTML.replace("Aumentado", "<b>Aumentado</b>")
    resultado.innerHTML = resultado.innerHTML.replace("Moderado", "<b>Moderado</b>")
    resultado.innerHTML = resultado.innerHTML.replace("Grave", "<b>Grave</b>")
    resultado.innerHTML = resultado.innerHTML.replace("Muito grave", "<b>Muito grave</b>")
}

