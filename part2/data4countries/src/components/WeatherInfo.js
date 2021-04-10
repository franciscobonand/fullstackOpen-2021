import React, { useState, useEffect } from 'react'
import axios from 'axios'

const weather_api_key = process.env.REACT_APP_API_KEY

const WeatherInfo = ({city}) => {
    const [info, setInfo] = useState([])

    useEffect(() => {
        axios.get(`http://api.weatherstack.com/current?access_key=${weather_api_key}&query=${city}`)
            .then(response => {
                let temp = []
                temp.push(response.data.current)
                return temp
            })
            .then(newState => setInfo(newState))
    }, [city])

    if (info.length > 0) {
        return (
            <>
            <h2>Weather in {city}</h2>
            <div style={{fontWeight: "bold"}}>Temperature: {info[0].temperature} Celsius</div>
            <img src={info[0].weather_icons[0]} width="100" height="100" alt='' />
            <div>Wind: {info[0].wind_speed} mph direction {info[0].wind_dir}</div>
            </>
        )
    }
    return (<></>)
}

export default WeatherInfo