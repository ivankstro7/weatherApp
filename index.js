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

        //line
        const line = document.createElement('div');
        line.className = "line"

        header.append(title,line);

        //degradado
        const degrade = document.createElement('div');
        degrade.classList = "degrade"

        // container city
        const tempCity = document.createElement('h3');
        tempCity.textContent = Math.floor(responseJson.main.temp - 273.15);

        const CityName = document.createElement('p');
        CityName.textContent = responseJson.name;
        CityName.className = "name"

        const longitude = document.createElement('p');
        longitude.textContent = "Lon: " + responseJson.coord.lon;

        const latitude = document.createElement('p')
        latitude.textContent = "Lat: " + responseJson.coord.lat;

        const lonAndLat = document.createElement('div');
        lonAndLat.append(longitude, latitude);
        lonAndLat.className = "container-coordenadas"

        const bodyDetail = document.createElement('div');
        bodyDetail.append(tempCity,CityName,lonAndLat);
        bodyDetail.classList = "body-detail col-9"    

        // weather icon
        const icon = document.createElement('img');
        icon.src = responseJson.weather[0].icon;

        const description = document.createElement('p');
        description.textContent = responseJson.weather[0].description;

        const containerDay = document.createElement('div');
        containerDay.append(icon,description);
        containerDay.classList = "body-icon col-3" 

        const image = document.createElement('img');
        image.src = "/assets/bg.jpg";

        const containerImage = document.createElement('div');
        containerImage.appendChild(image);
        containerImage.className = "container-image"

        const containerDetail = document.createElement('div');
        containerDetail.append(bodyDetail,containerDay);
        containerDetail.classList = "container-detail col-12"    
        
        const detailAndWeather = document.createElement('div');
        detailAndWeather.append(degrade,containerDetail,containerImage)
        detailAndWeather.classList = "city-detail"

        // body card - humidity
        const humidity = document.createElement('h3');
        humidity.textContent = responseJson.main.humidity + " %";

        const humidityTitle = document.createElement('p');
        humidityTitle.textContent = "Humidity"

        const containerHumidity = document.createElement('div');
        containerHumidity.append(humidity,humidityTitle);
        containerHumidity.className = "body-text"

        const lineH = document.createElement('div');
        lineH.className = "line"

        const wrapHumidity = document.createElement('div');
        wrapHumidity.append(containerHumidity,lineH);
        wrapHumidity.classList = "column humidity col-4"

        // body card - wind
        const wind = document.createElement('h3');
        wind.textContent = responseJson.wind.speed + " km";

        const windTitle = document.createElement('p');
        windTitle.textContent = "Wind"

        const containerWind = document.createElement('div');
        containerWind.append(wind,windTitle);
        containerWind.className = "body-text"

        const lineW = document.createElement('div');
        lineW.className = "line"

        const wrapWind = document.createElement('div');
        wrapWind.append(lineW,containerWind);
        wrapWind.className = "column wind col-4"

        // body card - feels like
        const feelsLike = document.createElement('h3');
        feelsLike.textContent = responseJson.main.feels_like;

        const feelsLikeTitle = document.createElement('p');
        feelsLikeTitle.textContent = "Feels Like"

        const containerFeels = document.createElement('div');
        containerFeels.append(feelsLike,feelsLikeTitle);
        containerFeels.className = "body-text"

        const lineF = document.createElement('div');
        lineF.className = "line"

        const wrapFeels = document.createElement('div');
        wrapFeels.append(containerFeels,lineF);
        wrapFeels.className = "column feels-like col-4"   

        const bodyCard = document.createElement('div');
        bodyCard.append(wrapHumidity,wrapWind,wrapFeels);
        bodyCard.className = "body-card"

        // wrap
        const card = document.createElement('div');
        card.className = "card"
        card.append(header,detailAndWeather,bodyCard);

        todosLosItems.push(card);

    weather.append(...todosLosItems)
});         