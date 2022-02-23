import React, { useState } from "react"
import "./details.css"
import { useSelector } from "react-redux";
import { selectWeatherTurin } from "../../state/selectors/selector";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWind, faMagnifyingGlass, faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Details = ({ dayWeek, month, number }) => {
    const weatherTurin = useSelector(selectWeatherTurin)

    return (
        <>
            {
                Object.keys(weatherTurin).length > 0 ?
                    <div className="details_container_all">
                        <div className="left_container">
                            <div className="title_details">
                                <span>Today</span>

                            </div>
                            <div className="today_container">
                                <div className="today">
                                    <div className="today_details">
                                        <span className="today_text">
                                            temp. max
                                        </span>
                                        <span className="temp_text">
                                            {`${parseInt(weatherTurin.main.temp_max - 273)}°`}
                                        </span>
                                    </div>
                                    <div className="today_details">
                                        <span className="today_text">
                                            temp
                                        </span>
                                        <span className="temp_text">
                                            {`${parseInt(weatherTurin.main.temp - 273)}°`}
                                        </span>
                                    </div>
                                    <div className="today_details">
                                        <span className="today_text">
                                            temp. min
                                        </span>
                                        <span className="temp_text">
                                            {`${parseInt(weatherTurin.main.temp_min - 273)}°`}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="center_container">
                            <div className="title_details">
                                <span>Details</span>
                            </div>
                            <div className="week_month">
                                <div className="week_details_container">
                                    <div className="week_container">
                                        <div className="week_details_left">
                                            <span className="title_text">
                                                {`${dayWeek}, ${month} ${number}`}
                                            </span>
                                            <span className="icon_wind">
                                                <FontAwesomeIcon icon={faWind} />
                                            </span>
                                        </div>
                                        <div className="week_details_right">
                                            <span className="details_text_temp">
                                                {`${parseInt(weatherTurin.main.temp - 273)}°`}
                                            </span>
                                            <span className="details_text">
                                                {`Wind Speed: ${weatherTurin.wind.speed}Km`}
                                            </span>
                                            <span className="details_text">
                                                {`Humidity: ${weatherTurin.main.humidity}%`}
                                            </span>
                                            <span className="details_text">
                                                {`Pressure: ${weatherTurin.main.pressure}hPa`}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right_container">
                            <div className="title_details">
                                <span>Search</span>
                            </div>
                            <div className="search" >
                                <input className="search_input" placeholder="ex. Miami"></input>
                                <button className="icon_search">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </button>
                            </div>
                            <div className="title_details">
                                <span>Localization</span>
                            </div>
                            <div className="localization">
                                <div className="localization_details">
                                    <span className="localizaition_icon">
                                        <FontAwesomeIcon icon={faLocationDot} />
                                    </span>
                                    <span className="localization_text">
                                        Add localization
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div >
                    :
                    ""
            }
        </>
    )
}
export default Details;