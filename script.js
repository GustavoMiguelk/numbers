// Obtendo os elementos da página.
const form = document.querySelector("form#sort")
const result = document.querySelector(".result")
const sortNumber = document.querySelector(".sort-number")
const sortResult = document.querySelector(".sort-result")
const sortRepeat = document.querySelector("#sort-again")

// Criando o Array para receber os números sorteados.
var numbers = []

// Evento ativado ao enviar o formulário.
form.addEventListener("submit", (event) => {
    event.preventDefault()

    // Obtendo os valores inseridos nos inputs.
    const qtdNumber = document.querySelector("#number")
    const minNumber = document.querySelector("#min")
    const maxNumber = document.querySelector("#max")

    // Transformando em número.
    const qtd = Number(qtdNumber.value)
    const min = Number(minNumber.value)
    const max = Number(maxNumber.value)

    // Verificando se os valores são válidos.
    if(min > max){
        alert("Insira um valor mínimo que seja superior ao valor máximo.")
        return
    }
    else if(min < 0 || max <= 0 || qtd <= 0)
    {
        alert("Insira uma valor válido.")
        return
    }

    // Sorteando a quantidade de números selecionada.
    for(let i = 0; i < qtd; i++){
        // Gerando números inteiros aleatórios.
        numbers.push(Math.floor(Math.random() * (max - min + 1)) + min)
        
        // Trocando a exibição dos Sections.
        sortNumber.classList.add("remove")
        sortResult.classList.add("appear")

        // Criando o Span que vai receber o resultado.
        var resultSpan = document.createElement("span")

        // Inserindo o número dentro do Span.
        resultSpan.append(numbers[i])

        // Inserindo o span dentro da div de resultados.
        result.append(resultSpan)
    }
        // Limpando os Inputs.
        qtdNumber.value = ""
        minNumber.value = ""
        maxNumber.value = ""
})

sortRepeat.addEventListener("click", () => {
    // Removendo os números do array.
    numbers.length = 0
    numbers = []
    result.innerHTML = ""

    // Volta para o section que sorteia novos números.
    sortNumber.classList.remove("remove")
    sortResult.classList.remove("appear")
})