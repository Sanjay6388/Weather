const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '561e33c619mshd7f2b8e993c4e0ap1a3129jsndc1b44ae0ab2',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=>{
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {
        
		console.log(response)
            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            //wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
	})

	.catch(err => console.error(err));


}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})
getWeather("New Delhi")



const getWeather1 = (city)=>{
    cityName1.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New York', options)
  
	.then(response => response.json())
	.then((response) => {
        
		console.log(response)
            //cloud_pct4.innerHTML = response.cloud_pct
            temp4.innerHTML = response.temp          
            feels_like4.innerHTML = response.feels_like
            humidity4.innerHTML = response.humidity
            min_temp4.innerHTML = response.min_temp
            max_temp4.innerHTML = response.max_temp
            wind_speed4.innerHTML = response.wind_speed
            //wind_degrees4.innerHTML = response.wind_degrees
            sunrise4.innerHTML = response.sunrise
            sunset4.innerHTML = response.sunset
	})

	.catch(err => console.error(err));
}
getWeather1("New York")

const getWeather2 = (city)=>{
    cityName2.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Tokyo', options)
	.then(response => response.json())
	.then((response) => {
        
		console.log(response)
            //cloud_pct4.innerHTML = response.cloud_pct
            temp5.innerHTML = response.temp          
            feels_like5.innerHTML = response.feels_like
            humidity5.innerHTML = response.humidity
            min_temp5.innerHTML = response.min_temp
            max_temp5.innerHTML = response.max_temp
            wind_speed5.innerHTML = response.wind_speed
            //wind_degrees4.innerHTML = response.wind_degrees
            sunrise5.innerHTML = response.sunrise
            sunset5.innerHTML = response.sunset
	})

	.catch(err => console.error(err));
}
getWeather2("Tokyo")

const getWeather3 = (city)=>{
    cityName3.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
	.then(response => response.json())
	.then((response) => {
        
		console.log(response)
            //cloud_pct4.innerHTML = response.cloud_pct
            temp6.innerHTML = response.temp          
            feels_like6.innerHTML = response.feels_like
            humidity6.innerHTML = response.humidity
            min_temp6.innerHTML = response.min_temp
            max_temp6.innerHTML = response.max_temp
            wind_speed6.innerHTML = response.wind_speed
            //wind_degrees4.innerHTML = response.wind_degrees
            sunrise6.innerHTML = response.sunrise
            sunset6.innerHTML = response.sunset
	})

	.catch(err => console.error(err));
}
getWeather3("Mumbai")

const getWeather4 = (city)=>{
    cityName4.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Gorakhpur', options)
	.then(response => response.json())
	.then((response) => {
        
		console.log(response)
            //cloud_pct4.innerHTML = response.cloud_pct
            temp7.innerHTML = response.temp          
            feels_like7.innerHTML = response.feels_like
            humidity7.innerHTML = response.humidity
            min_temp7.innerHTML = response.min_temp
            max_temp7.innerHTML = response.max_temp
            wind_speed7.innerHTML = response.wind_speed
            //wind_degrees4.innerHTML = response.wind_degrees
            sunrise7.innerHTML = response.sunrise
            sunset7.innerHTML = response.sunset
	})

	.catch(err => console.error(err));
}
getWeather4("Gorakhpur")

