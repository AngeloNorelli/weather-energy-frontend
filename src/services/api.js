const API_BASE_URL = "https://weather-energy-backend.onrender.com";

export const fetchWeatherForecast = async (latitude, longitude) => {
    const response = await fetch(`${API_BASE_URL}/weather/forecast?latitude=${latitude}&longitude=${longitude}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    });

    if (!response.ok) {
        throw new Error("failed to fetch weather forecast");
    }
    return response.json();
};

export const fetchWeeklySummary = async (latitude, longitude) => {
    const response = await fetch(`${API_BASE_URL}/weather/summary?latitude=${latitude}&longitude=${longitude}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    });

    if (!response.ok) {
        throw new Error("failed to fetch weekly summary");
    }
    return response.json();
};