const divSemana = document.getElementById("semana");
const divHoje = document.getElementById("hoje")

function posicao (position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    teste(lat, long)
}

function latLong(){
    navigator.geolocation.getCurrentPosition(posicao);
}

latLong();

function teste(lat, long){
    
fetch(`http://api.weatherapi.com/v1/forecast.json?key=870ea7f706f34eaf986213002221908&q=${lat},${long}&days=5&aqi=no&alerts=no`)
.then(response => response.json())
.then(data => {
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

    const weekList = data.forecast.forecastday

    let htmlSemana = "";
    weekList.forEach(element => {
        htmlSemana += `
        <div>
            <img src="${element.day.condition.icon}">
            <div>
                <p>Day: ${element.date}</p>
                <p>Min: ${element.day.mintemp_c}<span>&#8451;</span> Max: ${element.day.maxtemp_c}<span>&#8451;</span> </p>
                <p>Comment:${element.day.condition.text}</p>
            </div>
        </div>`
    });

    divSemana.innerHTML = htmlSemana
    // divHoje.innerHTML = html

})

}

