import React, { useContext } from "react";
import "./Weather.css";
import { MapPin, Sunrise, Sunset } from "react-feather";
import DateContext from "./Provider/DateContext";
import Context from "./Provider/Context";

const Weather = () => {
  const { day, strDay, strMonth } = useContext(DateContext);
  const { res, isLoading } = useContext(Context);

  if (!isLoading) {
    return null;
  } else {
    let {
      country_code,
      city_name,
      temp,
      weather,
      sunrise,
      sunset,
    } = res.data[0];
    const imgSrc = ` https://www.weatherbit.io/static/img/icons/${weather.icon}.png`;
    return (
      <div className="container">
        <div className="overlay">
          <div className="date">
            <h2 className="date-dayname">{strDay}</h2>
            <span className="date-day">
              {day} {strMonth} 2020
            </span>
            <br />

            <span className="location">
              <MapPin size={14} /> {city_name}, {country_code}
            </span>

            <div className="sun">
              <span>
                <Sunrise size={22} className="sunrise" /> {sunrise}
              </span>
              <br />
              <span>
                <Sunset size={22} className="sunset" /> {sunset}
              </span>
            </div>
          </div>
          <div className="weather">
            <img className="weather-icon" src={imgSrc} alt="weather icon" />
            <br />
            <span className="weather-temp">{temp}°C</span>
            <p className="weather-desc">{weather.description}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default Weather;
