// Clock Widget - Updates every second
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);

// Weather Widget - Fetches data from OpenWeather API
const weatherAPIKey = 'YOUR_OPENWEATHER_API_KEY';  // Replace with your own OpenWeather API key
const city = 'New York'; // You can change this to any city you like

function updateWeather() {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${weatherAPIKey}`)
    .then(response => response.json())
    .then(data => {
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
      
      document.getElementById('weather').innerHTML = `
        <img src="${icon}" alt="${description}" />
        ${Math.round(temperature)}°C - ${description.charAt(0).toUpperCase() + description.slice(1)}
      `;
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      document.getElementById('weather').textContent = 'Unable to fetch weather data';
    });
}

updateWeather();

// Easter Egg - Show a surprise message
function triggerEasterEgg() {
  const easterEggContent = document.getElementById('easterEggContent');
  easterEggContent.style.display = 'block';
  document.getElementById('easterEggButton').disabled = true;
  setTimeout(() => {
    easterEggContent.style.display = 'none';
    document.getElementById('easterEggButton').disabled = false;
  }, 5000); // Hide Easter Egg after 5 seconds
}
