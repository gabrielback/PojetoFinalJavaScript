// get location
const currentLocation = (position) => position.coords.latitude + "," + position.coords.longitude;
const latLong = () => navigator.geolocation.getCurrentPosition(currentLocation, error);
const error = (err) => console.warn(`ERROR(${err.code}): ${err.message}`);

const latitude = -26.30;
const longitude = -48.85;
const divSemana = document.getElementById("semana");
const divHoje = document.getElementById("hoje")

fetch(`http://api.weatherapi.com/v1/forecast.json?key=870ea7f706f34eaf986213002221908&q=${latitude},${longitude}&days=5&aqi=no&alerts=no`)
    .then(response => response.json())
    .then(data => {
        if(divHoje){
            divHoje.innerHTML = `
            <div class="card"">
                    <img src="${data.current.condition.icon}"
                    class="card-img-top" alt="...">
                    <div class="card-body">
                        <p>Temperature: ${data.location.name}, ${data.location.region},${data.location.country}</p>
                        <p class="card-text">Current: ${data.current.temp_c}<span>&#8451;</span></p>
    
                        <p class="card-text">Comment: ${data.current.condition.text}</p>
                    </div>
                  </div>`
        }

        const weekList = data.forecast.forecastday

        let htmlSemana = "";
        weekList.forEach(element => {
            htmlSemana += `
            <div class="card">
                <img src="${element.day.condition.icon}"
                class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">Day: ${element.date}</p>
                    <p class="card-text">Min: ${element.day.mintemp_c}<span>&#8451;</span> Max: ${element.day.maxtemp_c}<span>&#8451;</span> </p>
                    <p class="card-text">Comment:${element.day.condition.text}</p>
                </div>
            </div>`
        });

        divSemana.innerHTML = htmlSemana
        divHoje.innerHTML = html

    })



