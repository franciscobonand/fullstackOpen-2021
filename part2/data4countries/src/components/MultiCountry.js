import React, { useState } from 'react'
import CountryInfo from './CountryInfo'

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

export default MultiCountry