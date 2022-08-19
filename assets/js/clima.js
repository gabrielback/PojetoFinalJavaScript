
fetch("http://api.weatherapi.com/v1/forecast.json?key=870ea7f706f34eaf986213002221908&q={lat},{lon}&days=5&aqi=no&alerts=no")
.then(response => response.json()) 
.then(data => {
    console.log(data);
})




// key1= 870ea7f706f34eaf986213002221908


// Query parameter based on which data is sent back. It could be following:
// Latitude and Longitude (Decimal degree) e.g: q=48.8567,2.3508
// city name e.g.: q=Paris
// US zip e.g.: q=10001
// UK postcode e.g: q=SW1
// Canada postal code e.g: q=G2J
// metar:<metar code> e.g: q=metar:EGLL
// iata:<3 digit airport code> e.g: q=iata:DXB
// auto:ip IP lookup e.g: q=auto:ip
// IP address (IPv4 and IPv6 supported) e.g: q=100.0.0.1

// {-26.30},{-48.85}