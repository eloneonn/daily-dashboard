import weatherService from "../services/weatherService";
import { useState, useEffect } from "react";
import "./styles.css";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [daynames, setDaynames] = useState([]);

  const handleWeather = async () => {
    let daynames = [];

    for (let index = 0; index < 6; index++) {
      const today = new Date();
      const dayToPush = new Date(today);
      dayToPush.setDate(dayToPush.getDate() + (index + 1));
      daynames.push(
        dayToPush.toLocaleDateString("fi-FI", { weekday: "short" })
      );
    }

    setDaynames(daynames);

    const res = await weatherService.getWeather();
    res.data.daily.pop();

    setWeather({ ...res.data });
  };

  const formatHours = (addition) => {
    const now = Number(new Date().toLocaleTimeString().substring(0, 2));
    var toReturn = now + addition;

    if (toReturn > 24) {
      toReturn = toReturn - 24;
    }

    return toReturn;
  };

  useEffect(() => {
    // INITIAL INFO
    handleWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // AUTO-REFRESH EVERY 10 MINUTES
    setInterval(handleWeather, 600000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {weather ? (
        <div className="weather-grid">
          <div className="weather-current">
            <div className="weather-current-icon-wrapper">
              <img
                className="weather-current-icon"
                alt="weather icon"
                src={`http://openweathermap.org/img/wn/${weather.current.weather[0].icon}@4x.png`}
              ></img>
            </div>
            <div>
              <p className="weather-current-desc">
                {weather.current.weather[0].description}
              </p>
              <table className="weather-current-table">
                <tbody>
                  <tr>
                    <td className="weather-icon-wrapper">
                      <img
                        className="weather-icon"
                        alt="temperature icon"
                        src="temperature.png"
                      ></img>
                    </td>
                    <td>{Math.round(weather.current.temp)} °C</td>
                  </tr>
                  <tr>
                    <td className="weather-icon-wrapper">
                      <em>Tuntuu: </em>
                    </td>
                    <td>{Math.round(weather.current.feels_like)} °C</td>
                  </tr>
                  <tr>
                    <td className="weather-icon-wrapper">
                      <img
                        className="weather-icon"
                        alt="night temperature icon"
                        src="temperature_night.png"
                      ></img>
                    </td>
                    <td>{Math.round(weather.daily[0].temp.min)} °C</td>
                  </tr>
                  <tr>
                    <td className="weather-icon-wrapper">
                      <img
                        className="weather-icon"
                        alt="wind icon"
                        src="wind.png"
                      ></img>
                    </td>
                    <td>{Math.round(weather.current.wind_speed)} m/s</td>
                  </tr>
                  <tr>
                    <td className="weather-icon-wrapper">
                      <img
                        className="weather-icon"
                        alt="humidity icon"
                        src="humidity.png"
                      ></img>
                    </td>
                    <td>{weather.current.humidity}%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="weather-today-wrapper">
              <table className="weather-today-table">
                <tbody>
                  <tr>
                    <td className="weather-daily-name">{formatHours(4)}.00</td>
                    <td className="weather-icon-wrapper-small">
                      <img
                        className="weather-daily-icon-small"
                        alt="daily weather icon"
                        src={`http://openweathermap.org/img/wn/${weather.hourly[4].weather[0].icon}@2x.png`}
                      ></img>
                    </td>
                    <td className="weather-daily-temp">
                      {Math.round(weather.hourly[4].temp)} °C
                    </td>
                  </tr>
                  <tr>
                    <td className="weather-daily-name">{formatHours(8)}.00</td>
                    <td className="weather-icon-wrapper-small">
                      <img
                        className="weather-daily-icon-small"
                        alt="daily weather icon"
                        src={`http://openweathermap.org/img/wn/${weather.hourly[8].weather[0].icon}@2x.png`}
                      ></img>
                    </td>
                    <td className="weather-daily-temp">
                      {Math.round(weather.hourly[8].temp)} °C
                    </td>
                  </tr>
                  <tr>
                    <td className="weather-daily-name">{formatHours(12)}.00</td>
                    <td className="weather-icon-wrapper-small">
                      <img
                        className="weather-daily-icon-small"
                        alt="daily weather icon"
                        src={`http://openweathermap.org/img/wn/${weather.hourly[12].weather[0].icon}@2x.png`}
                      ></img>
                    </td>
                    <td className="weather-daily-temp">
                      {Math.round(weather.hourly[12].temp)} °C
                    </td>
                  </tr>
                  <tr>
                    <td className="weather-daily-name">{formatHours(16)}.00</td>
                    <td className="weather-icon-wrapper-small">
                      <img
                        className="weather-daily-icon-small"
                        alt="daily weather icon"
                        src={`http://openweathermap.org/img/wn/${weather.hourly[16].weather[0].icon}@2x.png`}
                      ></img>
                    </td>
                    <td className="weather-daily-temp">
                      {Math.round(weather.hourly[16].temp)} °C
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="forecast">
            <table className="forecast-table forecast-tomorrow">
              <tbody>
                <tr>
                  <td
                    className="weather-daily-name"
                    style={{ fontSize: "1.45rem" }}
                  >
                    Huomenna
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="weather-icon-wrapper">
                      <img
                        className="weather-daily-icon-large"
                        alt="daily weather icon"
                        src={`http://openweathermap.org/img/wn/${weather.daily[1].weather[0].icon}@4x.png`}
                      ></img>
                    </div>
                    <div
                      className="weather-daily-temp"
                      style={{ fontSize: "1.35rem" }}
                    >
                      {Math.round(weather.daily[1].temp.day)} °C<br></br>
                      <div style={{ opacity: "50%" }}>
                        {Math.round(weather.daily[1].temp.min)} °C
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="forecast-table">
              <tbody>
                <tr>
                  {daynames.slice(1).map((dayname, i) => (
                    <td key={i} className="weather-daily-name">
                      {dayname}
                    </td>
                  ))}
                </tr>
                <tr>
                  {weather.daily.slice(2).map(
                    (
                      day,
                      i // SKIP FIRST TWO ITEMS (TODAY AND TOMORROW)
                    ) => (
                      <td key={i}>
                        <div className="weather-icon-wrapper">
                          <img
                            className="weather-daily-icon"
                            alt="daily weather icon"
                            src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png`}
                          ></img>
                        </div>
                        <div className="weather-daily-temp">
                          {Math.round(day.temp.day)} °C<br></br>
                          <div style={{ opacity: "50%" }}>
                            {Math.round(day.temp.min)} °C
                          </div>
                        </div>
                      </td>
                    )
                  )}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div>loading weather...</div>
      )}
    </div>
  );
};

export default Weather;
