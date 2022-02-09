//api
const api = 'https://api.openweathermap.org/data/2.5/weather?appid=6d7ac337bb80e4a6071f4816f5fe5c24&q=';
console.log(api)
// ID contenedor padre
const weather = document.querySelector('#weather');

const input = document.getElementById('input');

function btn () {
    
}

window.fetch(api + "cali")
    .then((respuesta) => respuesta.json())
    .then(responseJson => {
    const todosLosItems = [];             
        //div clima
        const containerClima = document.createElement("p");
        containerClima.textContent = responseJson.main.temp;        

        todosLosItems.push(containerClima);

    weather.append(...todosLosItems)
});         