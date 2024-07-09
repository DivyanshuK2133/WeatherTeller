import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "6a76cc1d5b635666512a16257d1f5559";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelslike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result
        } catch (err) {
            throw err;
        }

    };



    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        } catch (err) {
            setError(true);
        };

    };


    return (<div className='SearchBox'>
        <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="filled" required value={city} onChange={handleChange} className='searchBox' />
            <br /> <br />
            <Button variant="contained" type='submit' size='large' className='btn'>
                Send
            </Button>
            {error && <p style={{ color: "red" }}>No such place exists!</p>}
        </form>
    </div>)
}