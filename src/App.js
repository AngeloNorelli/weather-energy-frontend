import React, { useState } from "react";
import LocationInput from "./components/LocationInput";
import WeatherTable from "./components/WeatherTable";
import "./styles/App.css";

function App() {
    const [weatherData, setWeatherData] = useState(null);
    const [weeklySummary, setWeeklySummary] = useState(null);

    return (
        <div className="App">
            <h1>Weather and Solar Energy Forecast</h1>
            <LocationInput setWeatherData={setWeatherData} setWeeklySummary={setWeeklySummary} />
            {weatherData && <WeatherTable data={weatherData} summary={weeklySummary}/>}
        </div>
    );
}

export default App;