import ReactDOM from 'react-dom'
import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import People from './components/People'
import Filter from './components/Filter'
import numberClient from './services/numbers'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newFilter, setNewFilter ] = useState('')

  useEffect(() => {
    numberClient.getAll()
    .then(people => setPersons(people))  
  }, [])

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter filter={newFilter} handleChange={handleFilterChange}/>
      <h2>Add a new</h2>
        <PersonForm persons={persons} setPersons={setPersons}/>
      <h2>Numbers</h2>
        <People filter={newFilter} persons={persons} setPersons={setPersons}/>
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)