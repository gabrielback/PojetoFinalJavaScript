const divEnd = document.getElementById("infoend")
let elementoCEP = document.getElementById("cep")



const checarEnd = () => {
    
    
    fetch(`https://viacep.com.br/ws/${elementoCEP.value}/json/`)
    .then(response => response.json())
    .then(data => {
        console.log(data);

    document.getElementById('usercep').innerHTML = `<p>Localização para o CEP ${data.cep} é: </p>`
    document.getElementById('userlogradouro').innerHTML = `<p> ${data.logradouro}</p>`;
    document.getElementById('userbairro').innerHTML = `Bairro ${data.bairro} </p>` ;
    document.getElementById('usercidadeuf').innerHTML = `<p>Cidade de ${data.localidade} - ${data.uf} </p>`
        
    })
    
  }


  