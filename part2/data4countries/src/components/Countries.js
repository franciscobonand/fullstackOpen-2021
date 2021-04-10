import React from 'react'
import CountryInfo from './CountryInfo'
import MultiCountry from './MultiCountry'

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

export default Countries