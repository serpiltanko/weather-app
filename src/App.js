
import './App.css';
import WeatherApp from './Components/WeatherApp/WeatherApp';
import Container from './Components/WeatherApp/Container';
import AddCity from './Components/WeatherApp/AddCity';


import clear_icon from './Components/Assets/clear.png';
import cloud_icon from './Components/Assets/cloud.png';
import drizzle_icon from './Components/Assets/drizzle.png';
import rain_icon from './Components/Assets/rain.png';
import snow_icon from './Components/Assets/snow.png';





import { useState } from 'react';



function App() {

  const [isAddCityVisible, setAddCityVisible] = useState(false);

  const handleAddCityClick = () => {

    setAddCityVisible(!isAddCityVisible);
  }

 
  return (
    <div className="App">
      <WeatherApp />


      <Container />

      {isAddCityVisible && <AddCity />}
    </div>
  );
}

export default App;

