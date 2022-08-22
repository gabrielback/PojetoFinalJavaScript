
        const latitude = -26.30;
        const longitude = -48.85;
        const divHoje = document.getElementById("hoje");

        
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

                    <p class="card-text">Comment:${element.day.condition.text}</p>
                </div>
              </div>`


            });
            
            

            divHoje.innerHTML = html
            
        })

        async function funcao01(dados){
            let dadoProcessado = ""
                await dados.forEach( element => {
                      dadoProcessado +=`<div class="card" style="width: 18rem;">
                            <img src="${element.day.condition.icon}"
                            class="card-img-top" alt="...">
                            <div class="card-body">
                                <p class="card-text">Day: ${element.date}</p>
                                <p class="card-text">Min: ${element.day.mintemp_c}</p>
                                <p class="card-text">Max: ${element.day.maxtemp_c}</p>
                                <p class="card-text">Max: ${element.day.condition.text}</p>
                            </div>
                          </div>`


                    });
                    return dadoProcessado
                    
                }