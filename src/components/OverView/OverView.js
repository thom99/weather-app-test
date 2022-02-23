import React from "react"
import "./overview.css"
import building from "../../Images/building2.jpg"
import { useSelector } from "react-redux";
import { selectWeatherLondon, selectWeatherRome, selectWeatherTurin } from "../../state/selectors/selector";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faCloudRain, faCloud } from '@fortawesome/free-solid-svg-icons'

const OverView = ({ dayWeek, month, number, hour }) => {
    const weatherTurin = useSelector(selectWeatherTurin)
    const weatherLondon = useSelector(selectWeatherLondon)
    const weatherRome = useSelector(selectWeatherRome)
    return (
        <>
            {
                Object.keys(weatherTurin).length > 0 &&
                    Object.keys(weatherLondon).length > 0 &&
                    Object.keys(weatherRome).length > 0 ?
                    <div className="container_all">
                        <div className="container_overview">
                            <div className="image_container">
                                <div className="label">
                                    <div className="label_details">
                                        <span className="temp_city">
                                            {`${parseInt(weatherTurin.main.temp - 273)}°`}
                                        </span>
                                        <span>
                                            <FontAwesomeIcon icon={weatherTurin.weather[0].main === "Clear" ? faSun : weatherTurin.weather[0].main === "Clouds" ? faCloud : faCloudRain} />
                                        </span>
                                    </div>
                                    <div className="city">
                                        <span className="name">
                                            {weatherTurin.name}
                                        </span>
                                        <span className="date_main">
                                            {`${dayWeek}, ${month} ${number}`}
                                        </span>
                                        <span className="desc">
                                            {weatherTurin.weather[0].main === "Clear" ? "Sunny" : weatherTurin.weather[0].main === "Clouds" ? "Cloudy" : "Rainy"}
                                        </span>
                                    </div>
                                </div>
                                <img className="image" src={building} alt=""></img>
                            </div>
                            <div className="container_right">
                                <button className="add_city">
                                    <span>
                                        +
                                    </span>
                                    <span>
                                        Aggiungi Città
                                    </span>
                                </button>
                                <div className="city_1">
                                    <div className="city_details">
                                        <span className="title">
                                            {weatherLondon.name}
                                        </span>
                                        <span className="date">
                                            {`${dayWeek}, ${month} ${number}`}
                                        </span>
                                        <span className="hours">
                                            {hour <= 12 ? `${hour}AM` : `${hour}PM`}
                                        </span>
                                    </div>
                                    <div className="icon_weather">
                                        <FontAwesomeIcon icon={weatherLondon.weather[0].main === "Clear" ? faSun : weatherLondon.weather[0].main === "Clouds" ? faCloud : faCloudRain} />
                                    </div>
                                    <div className="temp">
                                        {`${parseInt(weatherLondon.main.temp - 273)}°`}
                                    </div>
                                </div>
                                <div className="city_2">
                                    <div className="city_details">
                                        <span className="title">
                                            {weatherRome.name}
                                        </span>
                                        <span className="date">
                                            {`${dayWeek}, ${month} ${number}`}
                                        </span>
                                        <span className="hours">
                                            {hour <= 12 ? `${hour}AM` : `${hour}PM`}
                                        </span>
                                    </div>
                                    <div className="icon_weather">
                                        <FontAwesomeIcon icon={weatherRome.weather[0].main === "Clear" ? faSun : weatherRome.weather[0].main === "Clouds" ? faCloud : faCloudRain} />
                                    </div>
                                    <div className="temp">
                                        {`${parseInt(weatherRome.main.temp - 273)}°`}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >

                    : ""
            }
        </>
    )
}

export default OverView;