document.getElementById('cityForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const city = document.getElementById('cityInput').value;
    getWeather(city);
});

async function getWeather(city) {
    const apiKey = '81e87f733958d90fccfb825fae0d2ea1'; // Thay bằng API key của bạn từ OpenWeatherMap
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.cod === 200) {
            displayWeather(data);
        } else {
            alert('Không tìm thấy thành phố');
        }
    } catch (error) {
        console.error('Error fetching the weather data:', error);
        alert('Failed to fetch weather data. Please try again.');
    }
}

function displayWeather(data) {
    const weatherResult = document.getElementById('weatherResult');
    weatherResult.innerHTML = `
        <p><strong>Thành Phố:</strong> ${data.name}</p>
        <p><strong>Nhiệt độ:</strong> ${data.main.temp} °C</p>
        <p><strong>Thời tiết:</strong> ${data.weather[0].description}</p>
        <p><strong>Độ ẩm:</strong> ${data.main.humidity} %</p>
        <p><strong>Tốc độ gió:</strong> ${data.wind.speed} m/s</p>
    `;
}
