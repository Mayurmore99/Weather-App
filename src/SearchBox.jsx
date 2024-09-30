import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

function SearchBox({ updateInfo }) {
  let [city, setcity] = useState("");
  let [error, seterror] = useState(false);
  const API = "https://api.openweathermap.org/data/2.5/weather";
  const API_Key = "4f2598df79c0ddabd2487bccab0b697c";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API}?q=${city}&appid=${API_Key}&units=metric`
      );
      let JsonResponse = await response.json();
      console.log(JsonResponse);

      let result = {
        city: city,
        Temp: JsonResponse.main.temp,
        TempMin: JsonResponse.main.temp_min,
        TempMax: JsonResponse.main.temp_max,
        Humidity: JsonResponse.main.humidity,
        FeelsLike: JsonResponse.main.feels_like,
        Weather: JsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  };

  let handelChange = (event) => {
    setcity(event.target.value);
  };

  let OnSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      setcity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (error) {
      seterror(true);
    }
  };

  return (
    <div className="searchbox">
      <form>
        {" "}
        <TextField
          id="City"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handelChange}
        />{" "}
        <br></br> <br></br>
        <Button variant="contained" type="submit" onClick={OnSubmit}>
          Search
        </Button>
        {error && <p style={{ color: "red" }}>No such Place exist</p>}
      </form>
    </div>
  );
}

export default SearchBox;
