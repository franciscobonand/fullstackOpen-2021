import React from 'react'

const People = ({filter, persons}) => {
    const lcFilter = filter.toLowerCase()
    const filtered = persons.filter(p => p.name.toLowerCase().includes(lcFilter))
    
    return filtered.map(pers => 
        <p key={pers.name}>
          {pers.name} {pers.number}
        </p>
    )
}

export default People