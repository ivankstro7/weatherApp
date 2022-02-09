//api
const api = 'https://api.openweathermap.org/data/2.5/weather?appid=6d7ac337bb80e4a6071f4816f5fe5c24&q=';
// ID contenedor padre
const weather = document.querySelector('#weather');

window.fetch(api + "cali")
    .then((respuesta) => respuesta.json())
    .then(responseJson => {
    const todosLosItems = [];   
        // header
        const header = document.createElement('div');
        header.className = "header-title"

        const title = document.createElement('h2');
        title.textContent = "¿How is the weather in the city?"

        header.appendChild(title);

        //container banner
        const image = document.createElement('img');
        image.src = "./assets/landScape.jpg"

        const line = document.createElement('div');

        const containerImage = document.createElement('div');
        containerImage.append(image,line);
        containerImage.className = "container-image"

        // container city
        const tempCity = document.createElement('h3');
        tempCity.textContent = Math.floor(responseJson.main.temp - 273.15);

        const CityName = document.createElement('p');
        CityName.textContent = responseJson.name;
        CityName.className = "name"

        const coordenadas = document.createElement('p');
        coordenadas.textContent = "Coordenadas de la ciudad :"

        const longitude = document.createElement('p');
        longitude.textContent = responseJson.coord.lon;

        const latitude = document.createElement('p')
        latitude.textContent = responseJson.coord.lat;

        const lonAndLat = document.createElement('div');
        lonAndLat.append(coordenadas,longitude, latitude);
        lonAndLat.className = "container-coordenadas"

        const containerDetail = document.createElement('div');
        containerDetail.append(tempCity,CityName,lonAndLat);
        containerDetail.className = "container-detail col-9"

        // weather icon
        const icon = document.createElement('img');
        icon.src = `${api}${weather.icon}`;

        const description = document.createElement('p');
        description.textContent = responseJson.weather.main;

        const containerDay = document.createElement('div');
        containerDay.append(icon,description);
        containerDay.className = "container-icon"  
        
        const detailAndWeather = document.createElement('div');
        detailAndWeather.append(containerDetail,containerDay)
        detailAndWeather.className = "city-detail"

        // body card - humidiy
        const humidity = document.createElement('h4');
        humidity.textContent = responseJson.main.humidity + " %";

        const humidityTitle = document.createElement('p');
        humidityTitle.textContent = "Humidity"

        const containerHumidity = document.createElement('div');
        containerHumidity.append(humidity,humidityTitle)
        containerHumidity.className = "humidity"

        // body card - wind
        const wind = document.createElement('h4');
        wind.textContent = responseJson.wind.speed + " km";

        const windTitle = document.createElement('p');
        windTitle.textContent = "Wind"

        const containerWind = document.createElement('div');
        containerWind.append(wind,windTitle);
        containerWind.className = "wind"

        // body card - feels like
        const feelsLike = document.createElement('h4');
        feelsLike.textContent = responseJson.main.feels_like;

        const feelsLikeTitle = document.createElement('p');
        feelsLikeTitle.textContent = "Feels Like"

        const containerFeels = document.createElement('div');
        containerFeels.append(feelsLike,feelsLikeTitle);
        containerFeels.className = "feelsLike"   

        const bodyCard = document.createElement('div');
        bodyCard.append(containerHumidity,containerWind,containerFeels);

        // wrap
        const card = document.createElement('div');
        card.className = "card"
        card.append(header,containerImage,detailAndWeather,bodyCard);

        todosLosItems.push(card);

    weather.append(...todosLosItems)
});         