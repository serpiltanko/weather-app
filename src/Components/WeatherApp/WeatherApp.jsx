import React from 'react'
import './WeatherApp.css'
import { useState } from 'react';
import menu_bar from '../Assets/bars-solid.svg';
import middle_area_pic from '../Assets/sunny.jpg';
import AddCity from './AddCity';
import Container from './Container'

const WeatherApp = () => {

    const [cityInfo, setCityInfo] = useState(null);
    const [isAddCityVisible, setAddCityVisible] = useState(false);

    const handleAddCityClick = (cityInfo) => {
        setCityInfo(cityInfo);
        setAddCityVisible(!isAddCityVisible);
    }



    return (
        <div>
            <div className='header'>
                <div className='headerText'>
                    Hava Durumu Sorgulama
                </div>
                <div className='menubar'>
                    <img src={menu_bar} alt="" />
                </div>
            </div>

            <div className='middleArea'>

                <img src={middle_area_pic} alt="mountain" className='picture' />

                <div className='overlay'>
                    <h3 >Şehir seçerek hava durumunu öğrenebilirsiniz.</h3>
                    <h5 >Şehrini seç ve hava durumunu öğren.</h5>
                    <input type="button" value="+ Şehir Ekle" onClick={handleAddCityClick} />

                </div>
            </div>   
           
            {isAddCityVisible && <AddCity onAddCity={handleAddCityClick} />}
            {cityInfo && <Container cityInfo={cityInfo} />}
        </div>
    )
}

export default WeatherApp