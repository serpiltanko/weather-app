import React from 'react'
import './AddCity.css'
import saving_img from '../Assets/floppy-disk-solid.svg';
import './Container.jsx'
import { useState } from 'react';

const AddCity = ({ onAddCity }) => {

    const [country, setCountry] = useState('Turkey');
    const [city, setCity] = useState('Istanbul');
    const [cityInfo, setCityInfo] = useState(null);

    const handleSave = () => {
        const newCityInfo = { country, city };
        setCityInfo(newCityInfo);  // Güncellenen kısım
        onAddCity(newCityInfo);
    };

    return (



        <div className='containerCity'>
            <form action="">
                <span className='cityAdd'>Şehir Ekle</span>
                <input type="button" value="x" className='exitButton' />
                <br />
                <br />
                <div className='countryChoose'>
                    <label htmlFor="countries">
                        Ülke
                    </label>
                    <br />
                    <select name="countries" id="countries" value={country}>
                        <option value="Turkey"></option>
                    </select>
                </div>

                <div className='cityChoose'>
                    <label htmlFor="">
                        Şehir
                    </label>
                    <br />
                    <select name="cities" id="cities" value={city}>
                        <option value="Istanbul" ></option>
                    </select>
                </div>

                <div className='footerSide'>
                    <button type="button" className='cancelBttn'>x Cancel</button>
                    <button type="button" className='savingBtnn' onClick={handleSave}>
                        <span><img src={saving_img} alt="" className='savingImg' /></span>Save
                    </button>
                </div>

            </form>
        </div>

    )
}

export default AddCity