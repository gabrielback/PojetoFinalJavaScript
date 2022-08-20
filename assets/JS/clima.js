
        const latitude = -26.30;
        const longitude = -48.85;
        const divHoje = document.getElementById("hoje");

        fetch("http://api.weatherapi.com/v1/forecast.json?key=870ea7f706f34eaf986213002221908&q=-26.30,-48.85&days=5&aqi=no&alerts=no")
        .then(response => response.json()) 
        .then(data => {
            
            
            // console.log("data..current temperatura atual > ",data.current.temp_c);
            // console.log("data.location.name> ",data.location.name);
            // console.log("data.location.region> ",data.location.region);
            // console.log("data.location.country> ",data.location.country);
            // console.log("data.location.localtime> ",data.location.localtime);
            
            
            const forecastObj = data.forecast.forecastday
            let html = ""

            funcao01(forecastObj)

            divHoje.innerHTML = html
            
            
            
        })
        
        async function funcao01(dados){

             await dados.forEach( element => {
                 console.log(element)
                return`
                Date: ${element.date}
                Min: ${element.day.mintemp_c}C 
                Max: ${element.day.maxtemp_c}C \n
                ${element.day.condition.text}\n
                ${element.day.condition.icon}` 
            });
            
        }