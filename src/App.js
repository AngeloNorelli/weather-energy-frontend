import React, { useEffect, useState } from "react";
import LocationInput from "./components/LocationInput";
import WeatherTable from "./components/WeatherTable";
import "weather-icons/css/weather-icons.css";
import "./styles/App.css";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    useEffect(() => {
        const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark").matches;
        setIsDarkMode(prefersDarkMode);
    }, []);

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [isDarkMode]);

    const [weatherData, setWeatherData] = useState(null);
    const [weeklySummary, setWeeklySummary] = useState(null);

    return (
        <div className="App">
            <h1>Weather and Solar Energy Forecast</h1>
            <div id="darkModeSwitch" onClick={toggleDarkMode}>
                <i className={isDarkMode ? `wi wi-day-sunny` : 'wi wi-night-clear'} />
            </div>
            <LocationInput setWeatherData={setWeatherData} setWeeklySummary={setWeeklySummary} />
            {weatherData && <WeatherTable data={weatherData} summary={weeklySummary}/>}
        </div>
    );
}

export default App;