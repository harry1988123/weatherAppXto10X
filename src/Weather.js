import React from 'react'
import { Card } from "semantic-ui-react";
import './styles.css';

const CardExampleCard = ({weatherData}) => {
    console.log(weatherData);
    return (
         <Card>
             <Card.Content>
                 <Card.Header className="header">Country :{weatherData.location.country}</Card.Header>
                 <p>Temprature: {weatherData.current.temperature}</p>
                 <p>Time: {weatherData.location.localtime}  { weatherData.current.observation_time }</p>
                 <p>Wind: {weatherData.current.wind_speed}</p>
                 <p>Weather discription: {weatherData.current.weather_descriptions} </p>
                 <p>Humidity: { weatherData.current.humidity }  </p>
                 <img src={weatherData.current.weather_icons}/>  
             </Card.Content>
         </Card>
    )
}

export default CardExampleCard
