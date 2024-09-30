import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import { useState } from "react";

export default function WeatherApp() {
  let [weatherInfo, setweatherInfo] = useState({
    city: "pune",
    FeelsLike: 33.19,
    Humidity: 61,
    Temp: 30.08,
    TempMax: 30.08,
    TempMin: 30.08,
    Weather: "overcast clouds",
  });

  let updateInfo = (newInfo) => {
    setweatherInfo(newInfo);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Weather App</h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
