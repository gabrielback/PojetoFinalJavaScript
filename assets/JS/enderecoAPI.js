const divEnd = document.getElementById("infoend")
let elementoCEP = document.getElementById("cep")
const bgImage = document.getElementById("background-image")
bgImage.style = `background-image: url('https://mdbootstrap.com/img/Photos/Others/images/76.jpg'); height: 100vh`

const checarEnd = () => {
    
    fetch(`https://viacep.com.br/ws/${elementoCEP.value}/json/`)
    .then(response => response.json())
    .then(data => {

    document.getElementById('usercep').innerHTML = `<p class="p-2 text-center">Localização do CEP ${data.cep}: </p>`
    document.getElementById('userlogradouro').innerHTML = `<p class="p-2 text-center"> ${data.logradouro}</p>`;
    document.getElementById('userbairro').innerHTML = `<p class="p-2 text-center">Bairro ${data.bairro} </p>` ;
    document.getElementById('usercidadeuf').innerHTML = `<p class="p-2 text-center">Cidade de ${data.localidade} - ${data.uf} </p>`
    document.getElementById('container').style.backgroundColor = "#2e2e2e" ;

    })
    
  }


  