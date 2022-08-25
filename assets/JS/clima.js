const bgImage = document.getElementById("background-image")
bgImage.style = `background-image: url('https://mdbootstrap.com/img/Photos/Others/images/76.jpg'); height: 100vh`

const divSemana = document.getElementById("semana");
const divHoje = document.getElementById("hoje")
const divCep = document.getElementById("cep")

const getLocation = (position) => {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    return showWeatherCards(lat, long)
}

const getLatLongPosition = () => navigator.geolocation.getCurrentPosition(getLocation);

getLatLongPosition();


const showWeatherCards = (lat, long) => {
    
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=bddac26d1801422f8e8161726222308&q=${lat},${long}&days=5&aqi=no&alerts=no`)
    .then(response => response.json())
    .then(data => {
        const weekList = data.forecast.forecastday

        divCep.innerHTML += `<h1 class="titulo">Previsão do tempo em ${data.location.name}</h1>`
        console.log(data)
        if(divHoje){
        divHoje.innerHTML = `
        <div>
            <img src="${data.current.condition.icon}">
                <div>
                    <p>Temperature: ${data.location.name}, ${data.location.region},${data.location.country}</p>
                    <p>Current: ${data.current.temp_c}<span>&#8451;</span></p>
                    <p>Comment: ${data.current.condition.text}</p>
                </div>
              </div>`
    }

    let htmlSemana = "";
    weekList.forEach(element => {
        htmlSemana += `
        <div>
            <img src="${element.day.condition.icon}">
            <div>
                <p>Day: ${element.date}</p>
                <p>Min: ${element.day.mintemp_c}<span>&#8451;</span> Max: ${element.day.maxtemp_c}<span>&#8451;</span> </p>
                <p>Comment: ${element.day.condition.text}</p>
            </div>
        </div>`
    });

    divSemana.innerHTML = htmlSemana
})

}