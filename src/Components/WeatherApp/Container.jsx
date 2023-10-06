import React from 'react'
import './Container.css'
import weather_pic from '../Assets/mountain.jpg';
import menu_ellipsis from '../Assets/ellipsis-vertical-solid.svg';

import clear_icon from '../Assets/clear.png';
import cloud_icon from '../Assets/cloud.png';
import drizzle_icon from '../Assets/drizzle.png';
import rain_icon from '../Assets/rain.png';
import snow_icon from '../Assets/snow.png';


import { useState } from 'react';




const Container = ({ cityInfo }) => {

    const [wicon, setWicon] = useState(clear_icon);
    if (!cityInfo) {
        return null;
    }

    const { city, country } = cityInfo;


    const countryUrl = 'https://countriesnow.space/api/v0.1/countries/info?country=Turkey';

    fetch(countryUrl)
        .then(response => response.json())
        .then(data => {

            console.log('Ülke bilgileri:', data.data);
        })
        .catch(error => console.error('API isteği sırasında hata oluştu:', error));


    let api_key = "253c285b0b85c590e1786bfbed7b6051";


    const searchCity = async () => {
        const element = document.getElementsByClassName("cityAdd");
        if (element[0].value === "") {
            return 0;
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`

        let response = await fetch(url);
        let data = await response.json();

        const temprature = document.getElementsByClassName("rates");
        const tempratureFeel = document.getElementsByClassName("ratesFeel");

        temprature[0].innerHTML = Math.floor(data.main.temp) + "°c";
        tempratureFeel[0].innerHTML = Math.floor(data.main.feels_like) + "°c";



        if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
            setWicon(clear_icon);
        }
        else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
            setWicon(cloud_icon);
        }
        else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
            setWicon(drizzle_icon);
        }
        else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
            setWicon(drizzle_icon);
        }
        else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
            setWicon(rain_icon);
        }
        else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
            setWicon(rain_icon);
        }

        else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
            setWicon(snow_icon);
        }
        else {
            setWicon(clear_icon);
        }



    }


    return (
        <div className='container'>

            <img src={weather_pic} alt="weatherpic" className='weatherpic' />

            <div className='containerOverlay'>

                <div className='topArea'>
                    <div className='dateArea'>
                        <p>Sunday</p>
                        <p className='dayNumber'>19</p>
                    </div>
                    <div>
                        <img src={menu_ellipsis} alt="menubar" className='menu-ellipsis' />
                    </div>
                </div>

                <img src={wicon} alt="weatherimg" className='weatherImg' />

                <div className='cityName'>
                    {city} {country}
                </div>
                <div className='weatherTextDesc'>
                    Clear Sky
                </div>
                <div className='footer'>
                    <div className='weatherDetails'>
                        <div>
                            <ul>
                                <li>Current Temp.</li>
                                <li className='rates'>25°C</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Feels Like</li>
                                <li className='ratesFeel'>24°C</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Humidity</li>
                                <li className='rates'>27%</li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Container