import React from "react";
import WeeklySummary from "./WeeklySummary";
import 'weather-icons/css/weather-icons.css';
import "../styles/WeatherTable.css";

const getWeatherIcon = (weatherCode) => {
    switch (true) {
        case weatherCode === 0:
            return "wi-day-sunny";
        case [1, 2, 3].includes(weatherCode):
            return "wi-cloud";
        case [45, 48].includes(weatherCode):
            return "wi-fog";
        case [51, 53, 55].includes(weatherCode):
            return "wi-sprinkle";
        case [56, 57].includes(weatherCode):
            return "wi-raindrops";
        case [61, 63, 65].includes(weatherCode):
            return "wi-rain";
        case [66, 67].includes(weatherCode):
            return "wi-rain-mix";
        case [71, 73, 75].includes(weatherCode):
            return "wi-snow";
        case weatherCode === 77:
            return "wi-snowflake-cold";
        case [80, 81, 82].includes(weatherCode):
            return "wi-showers";
        case [85, 86].includes(weatherCode):
            return "wi-snow-wind";
        case weatherCode === 95:
            return "wi-thunderstorm";
        case [96, 99].includes(weatherCode):
            return "wi-storm-showers";
        default:
            return "wi-na";
    }
};

function WeatherTable({ data, summary }) {
    if (!Array.isArray(data) || data.length === 0) {
        return;
    }
    console.log(data);
    console.log(summary);

    return (
        <table className="weather-table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Weather Icon</th>
                    <th>Min Temp (°C)</th>
                    <th>Max Temp (°C)</th>
                    <th>Energy (kWh)</th>
                </tr>
            </thead>
            <tbody>
                {data.map((day, index) => (
                    <tr key={index}>
                        <td>{day.date}</td>
                        <td>
                            <i className={`wi ${getWeatherIcon(day.weather_code)}`}></i>
                        </td>
                        <td>{day.temp_min}</td>
                        <td>{day.temp_max}</td>
                        <td>{day.energy_kwh.toFixed(2)}</td>
                    </tr>
                ))}
            </tbody>
            {summary && <WeeklySummary summary={summary} />}
        </table>
    );
}

export default WeatherTable;