import React from 'react'
import numberClient from '../services/numbers'

const People = ({filter, persons, setPersons}) => {
  const lcFilter = filter.toLowerCase()
  const filtered = persons.filter(p => p.name.toLowerCase().includes(lcFilter))
  
  const handleDelete = (pers) => {
    if (window.confirm(`Delete ${pers.name} ?`)) {
      numberClient.delPers(pers.id)
      .then(setPersons(persons.filter(p => p.id !== pers.id)))
    }
  }

  return filtered.map(pers => 
    <p key={pers.name}>
      {pers.name} {pers.number}
      <button onClick={() => handleDelete(pers)}>delete</button>
    </p>
  )
}

export default People