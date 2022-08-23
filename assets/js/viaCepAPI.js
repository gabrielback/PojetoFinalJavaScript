// const cep = prompt("Digite seu cep: ", 89209500)

fetch(`https://viacep.com.br/ws/${89209500}/json/`)
    .then(response => response.json())
    .then(data => console.log(data))
