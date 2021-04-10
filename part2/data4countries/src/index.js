import ReactDOM from 'react-dom'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'

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

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)