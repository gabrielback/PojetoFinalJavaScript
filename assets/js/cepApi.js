const data = document.querySelector(".cep-api")
// const cep = prompt("Digite seu cep: ", 89209500)

/* geolocation is available */
var geolocation = Components.classes["@mozilla.org/geolocation;1"]

fetch(`https://viacep.com.br/ws/${89209500}/json/`)
    .then(response => response.json())
    .then(data =>
        console.log(data.logradouro, data.bairro, data.localidade, data.uf)
    )