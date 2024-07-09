import { useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './infobox';
import "./WeatherBox.css";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Lucknow",
        temp: 32.99,
        tempMax: 32.99,
        humidity: 32.99,
        feelslike: 39.99,
        weather: "haze",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };


    return (
        <div style={{ textAlign: "center" }} className='WeatherBox'>
            <h1>Search for the weather</h1>
            <SearchBox updateInfo={updateInfo}></SearchBox>
            <InfoBox info={weatherInfo}></InfoBox>
        </div>
    )
}