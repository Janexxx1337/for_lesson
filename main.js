
async function getData() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=59.934280&lon=30.335098&appid=3d2eccd69f31adbc8301fc8076ab9703');
    const data = await response.json();
    console.log(data)
    const heading = document.querySelector('h1')
    const info_weather = document.querySelector('p')
    const country = document.querySelector('span')
    const weather_type = document.querySelector('.weather-type')


    let temp_city = Math.round(data.main.temp -273.15)
    let country_info = data.sys.country
    let city_name = data.name
    let weather_kind = data.wind.speed


    info_weather.append(`В вашем городе сегодня ${temp_city}`)
    heading.append(city_name)


    if (country_info === 'RU') {
        country.append(`You are from RUSSIA`)
    }

    if (weather_kind < 5) {
        weather_type.innerHTML = `Сегодня спокойно! Скорость ветра в секунду ${weather_kind} <img src="https://w7.pngwing.com/pngs/898/373/png-transparent-computer-icons-wind-wave-wave-text-ocean-black.png" alt="">`
    }

}

getData()