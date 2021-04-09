import ReactDOM from 'react-dom'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function getCountries(countries, filter) {
    if (filter !== '') {
        const lcFilter = filter.toLowerCase()
        return countries.filter(c => c.name.toLowerCase().includes(lcFilter))
    }
    return []
}

const App = () => {
    const [filter, setFilter] = useState('')
    const [countries, setCountries] = useState([])

    useEffect(() => {
        axios.get('https://restcountries.eu/rest/v2/all')
            .then(response => getCountries(response.data, filter))
            .then(filtered => setCountries(filtered))
    }, [filter])

    return (
        <div>
            <Filter filter={filter} setFilter={setFilter}/>
            <Countries countries={countries}/>
        </div>
    )
}

const Filter = ({filter, setFilter}) => {
    const updateFilter = (event) => {
        setFilter(event.target.value)
    }
    return (
        <>
            find countries {' '}
            <input value={filter} onChange={updateFilter}/>
        </>
    )
}

const Countries = ({countries}) => {
    if (countries.length === 0){
        return(<></>)
    } else if (countries.length === 1) {
        return <CountryInfo country={countries[0]} />
    } else if (countries.length <= 10) {
        return (
            <> 
                {countries.map(ct =>
                    <MultiCountry key={ct.numericCode} country={ct}/>
                )}
            </>
        )
    }

    return (
        <p>
            Too many matches, specify another filter
        </p>
    )
}

const CountryInfo = ({country}) =>  (
    <>
        <h1>{country.name}</h1>
        <div>capital {country.capital}</div>
        <div>population {country.population}</div>
        <h3>languages</h3>
        <ul>
            {country.languages.map(lg =>
                <li key={lg.name}>
                    {lg.name}
                </li>
            )}
        </ul>
        <img src={country.flag} width="250" height="200" alt='' />
    </>
)

const MultiCountry = ({country}) => {
    const [show, setShow] = useState(false)

    return (
        <div>
            {country.name} {' '}
            <button onClick={()=>setShow(!show)}>show</button>
                {show ? <CountryInfo country={country} /> : null}
        </div>
    )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)