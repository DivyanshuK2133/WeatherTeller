import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export default function InfoBox({ info }) {

    let RAIN_URL = "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/09/shutterstock_787033735.jpg";
    let HOT_URL = "https://www.howitworksdaily.com/wp-content/uploads/2015/07/heatwave-scaled.jpg";
    let COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    return (<div className="InfoBox">
        <div className='card-container'>
            <Card sx={{ maxWidth: 345 }} className='card'>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity > 80 ? RAIN_URL : info.temp > 30 ? HOT_URL : COLD_URL}
                    title="weather"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <b>{info.city}</b>
                        &nbsp;
                        {info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 30 ? <WbSunnyIcon /> : <AcUnitIcon />}

                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"}>
                        <p>Temperature = {info.temp}&deg;C</p>
                        <p>Humidity = {info.humidity}</p>
                        <p>Min Temp = {info.tempMin}&deg;C</p>
                        <p>Max Temp = {info.tempMax}&deg;C</p>
                        <p>
                            The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}
                        </p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    </div>)
}