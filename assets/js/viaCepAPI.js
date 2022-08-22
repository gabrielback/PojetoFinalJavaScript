const divCep = document.getElementById("cep")
// const cep = prompt("Digite seu cep: ", 89209500)

fetch(`https://viacep.com.br/ws/${89209500}/json/`)
    .then(response => response.json())
    .then(data =>
        divCep.innerHTML += `<p>Localidade atual: ${data.logradouro}, ${data.bairro}, ${data.localidade}, ${data.uf}</p>`
    )