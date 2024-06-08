let cityName = prompt("Enter the city name");

const apiKey = 'your_api_key_here';  // Replace 'your_api_key_here' with your actual API key
const apiUrl = `https://p2pclouds.up.railway.app/v1/learn/weather?city=${cityName}&appid=${apiKey}`;

async function checkWeather() {
  try {
    if (cityName !== '') {
      let response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      let data = await response.json();
      
      console.log(data.current.temp_c);
      console.log(data.current.wind_kph);
      
      let weatherUpdate = document.querySelector('.weather-info');
      let windSpeed = document.querySelector('#windspeed');
      let temperature = document.querySelector('#temperature');
      
      temperature.innerHTML = `Temperature: ${data.current.temp_c}°C`;
      windSpeed.innerHTML = `Wind Speed: ${data.current.wind_kph} kph`;
    } else {
      alert("Please enter a city name.");
    }
  } catch (error) {
    console.log(`The error is: ${error}`);
  }
}

checkWeather();

