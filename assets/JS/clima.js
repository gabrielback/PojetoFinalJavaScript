const bgImage = document.getElementById("background-image")
bgImage.style = `background-image: url('https://free4kwallpapers.com/uploads/originals/2015/10/27/floridapartly-cloudy.-wallpaper_.jpg'); height: 100vh`;

const divSemana = document.getElementById("semana");
const divHoje = document.getElementById("hoje")
const divCep = document.getElementById("cep")


const getPosition = (position) => appendWeater(position.coords.latitude, position.coords.longitude)

const getWeather = () => navigator.geolocation.getCurrentPosition(getPosition);

getWeather();

function appendWeater(lat, long){
    
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=bddac26d1801422f8e8161726222308&q=${lat},${long}&days=5&aqi=no&alerts=no`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        divCep.innerHTML += `<h1>Previsão do tempo em ${data.location.name}</h1>`
        if(divHoje){
        divHoje.innerHTML = `
        <div>
            <img src="${data.current.condition.icon}">
            <div>
                <p>Temperatura em: ${data.location.name}, ${data.location.region},${data.location.country}</p>
                <p>Atual: ${data.current.temp_c}<span>&#8451;</span></p>
                <p>${data.current.condition.text}</p>
            </div>
        </div>`
    }

    const weekList = data.forecast.forecastday

    let htmlSemana = "";
    weekList.forEach(element => {
        htmlSemana += `
        <div>
            <img src="${element.day.condition.icon}">
            <div>
                <p>${element.date}</p>
                <p>Min: ${element.day.mintemp_c}<span>&#8451;</span> Max: ${element.day.maxtemp_c}<span>&#8451;</span> </p>
                <p>${element.day.condition.text}</p>
            </div>
        </div>`
    });

    divSemana.innerHTML = htmlSemana
})

}

