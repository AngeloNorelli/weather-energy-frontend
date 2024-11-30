import React, { useEffect, useState } from "react";
import { fetchWeatherForecast, fetchWeeklySummary } from "../services/api";

function LocationInput({ setWeatherData, setWeeklySummary }) {
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");

    const handleFetchData = async (latitude, longitude) => {
        try {
            const forecast = await fetchWeatherForecast(latitude, longitude);
            const summary = await fetchWeeklySummary(latitude, longitude);
            setWeatherData(forecast);
            setWeeklySummary(summary);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        const fetchLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                (position) => {
                    const lat = position.coords.latitude.toFixed(6);
                    const lon = position.coords.longitude.toFixed(6);
                    setLatitude(lat);
                    setLongitude(lon);

                    handleFetchData(lat, lon)
                },
                (error) => {
                    console.error("Error fetching location:", error);
                }
            );
            } else {
                console.error("Deolocation is not supported by this browser.");
            }
        };

        fetchLocation();
    }, []);

    return (
        <div>
            <input
                type="number"
                placeholder="Latitude"
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
            />
            <input
                type="number"
                placeholder="Longitude"
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
            />
            <button onClick={() => handleFetchData(latitude, longitude)}>Get Forecast</button>
        </div>
    );
}

export default LocationInput;