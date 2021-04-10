import React from 'react'
import WeatherInfo from './WeatherInfo'

const CountryInfo = ({country}) =>  (
    <>
        <h1>{country.name}</h1>
        <div style={{fontWeight: "bold"}}>Capital: {country.capital}</div>
        <div style={{fontWeight: "bold"}}>Population: {country.population}</div>
        <h3>Languages</h3>
        <ul>
            {country.languages.map(lg =>
                <li key={lg.name}>
                    {lg.name}
                </li>
            )}
        </ul>
        <img src={country.flag} width="250" height="200" alt='' />
        <WeatherInfo city={country.capital}/>
    </>
)

export default CountryInfo