// get location
const currentLocation = (position) => position.coords.latitude + "," + position.coords.longitude;
const latLong = () => navigator.geolocation.getCurrentPosition(currentLocation, error);
const error = (err) => console.warn(`ERROR(${err.code}): ${err.message}`);

const latitude = -26.30;
const longitude = -48.85;

<<<<<<< HEAD
const divSemana = document.getElementById("semana");
const divHoje = document.getElementById("hoje")

fetch(`http://api.weatherapi.com/v1/forecast.json?key=870ea7f706f34eaf986213002221908&q=${latitude},${longitude}&days=5&aqi=no&alerts=no`)
    .then(response => response.json())
    .then(data => {

        divHoje.innerHTML = `
        <div class="card"">
                <img src="${data.current.condition.icon}"
                class="card-img-top" alt="...">
                <div class="card-body">
                    <p>Temperature: ${data.location.name}, ${data.location.region},${data.location.country}</p>
                    <p class="card-text">Current: ${data.current.temp_c}<span>&#8451;</span></p>
=======
        
        const weekday = ["Dom","Seg","Ter","Qua","Qui","Sex","Sab"];

        fetch("http://api.weatherapi.com/v1/forecast.json?key=870ea7f706f34eaf986213002221908&q=-26.30,-48.85&days=5&aqi=no&alerts=no")
        .then(response => response.json()) 
        .then(data => {
            
            // console.log("data..current temperatura atual > ",data.current.temp_c);
            // console.log("data.location.name> ",data.location.name);
            // console.log("data.location.region> ",data.location.region);
            // console.log("data.location.country> ",data.location.country);
            // console.log("data.location.localtime> ",data.location.localtime);
            
            
            const forecastObj = data.forecast.forecastday
            let html = `<div class=""><p>Previsão do tempo em ${data.location.name} </p></div> `;

            forecastObj.forEach(element => {
                
                html +=`<div class="card" style="width: 10rem;">
                <img src="${element.day.condition.icon}"
                class="card-img-top" alt="...">
                <div class="card-body text-center">
                    <p class="card-text .bg">${element.date}</p>
                    <p class="card-text">Max: ${element.day.maxtemp_c}<span>&#8451;</span> Min: ${element.day.mintemp_c}<span>&#8451;</span></p>
>>>>>>> be8f607d9fbe062e2069826ce20fd12bb66b2a81

                    <p class="card-text">Comment: ${data.current.condition.text}</p>
                </div>
              </div>`


<<<<<<< HEAD
        const weekList = data.forecast.forecastday
        
        let htmlSemana = "";
        weekList.forEach(element => {
            htmlSemana += `<div class="card">
                <img src="${element.day.condition.icon}"
                class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">Day: ${element.date}</p>
                    <p class="card-text">Min: ${element.day.mintemp_c}<span>&#8451;</span> Max: ${element.day.maxtemp_c}<span>&#8451;</span> </p>
=======
            });
            
            

            divHoje.innerHTML = html
            
        })
>>>>>>> be8f607d9fbe062e2069826ce20fd12bb66b2a81

                    <p class="card-text">Comment:${element.day.condition.text}</p>
                </div>
              </div>`
        });

        divSemana.innerHTML = htmlSemana

    })
