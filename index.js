const api = 'https://api.openweathermap.org/data/2.5/weather?id=2172797&appid=6d7ac337bb80e4a6071f4816f5fe5c24';
console.log(api);

const weather = document.querySelector('#weather');
console.log(weather);

window.fetch(api)
.then((respuesta) => respuesta.json())
.then(responseJson => {
    responseJson((item) => {                
        //div clima
        const containerClima = document.createElement("p");
        containerClima.textContent = item.timezone;       

    });   
    weather.append(containerClima);
});