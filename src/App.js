import { useState } from "react";
import "./App.css";
import Inputer from "./component/Inputer";
import WeatherReport from "./component/WeatherReport";
function App() {
  const APIKEY = "af1ba0f5e10e591f3ae10cdc17997d76";
  const [city, setCity] = useState("");
  const [res, setRes] = useState(false);
  const [error,setError] = useState(false);
  const [weatherDetails, setWeatherDetails] = useState({
    temp: "",
    img: "",
    description: "",
  });
  const backClickHandler = () => {
    setCity("")
    setRes(false)
  }
  const inputHandler = (event) => {
    console.log(event);
    setCity(event.target.value);
  };
  const findWeather = async () => {
    try{
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${APIKEY}`
    )
      .then((res) => res.json())
      .then((data) => data);
    console.log(data);
    setWeatherDetails({
      temp: data.main.temp,
      img: data.weather[0].icon,
      description: data.weather[0].description,
    });
    setRes(true);
  }catch(err){
    console.log(err.message)
    setError(true)
  }
  };
  console.log(city, "App")
  return (
    <div className="App">
      {!res ? (
        <Inputer
          input={city}
          inputHandler={inputHandler}
          findWeather={findWeather}
          error ={error}
        />
      ) : (
        <WeatherReport
          temp={weatherDetails.temp}
          img={weatherDetails.img}
          desc={weatherDetails.description}
          backClickHandler = {backClickHandler}
        />
      )}
    </div>
  );
}

export default App;
