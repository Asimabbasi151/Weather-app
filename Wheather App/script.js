const apiKey = "5e91817aaf573b86cf62a4de52e77088";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function checkweather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{
    document.querySelector(".weather").style.display="block";
    }
    let data = await response.json();


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weathericon.src ="images/clouds.png";
    }else if(data.weather[0].main == "Clear"){
        weathericon.src ="images/clear.png";
    }else if(data.weather[0].main == "Rain"){
        weathericon.src ="images/rain.png";
    }else if(data.weather[0].main == "Drizzle"){
        weathericon.src ="images/drizzle.png";
    }else if(data.weather[0].main == "Mist"){
        weathericon.src ="images/dmist.png";
    }



}

searchBtn.addEventListener("click",()=>{
    checkweather(searchBox.value);
})
