import ReactDOM from 'react-dom'
import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newFilter, setNewFilter ] = useState('')

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
        <People filter={newFilter} persons={persons}/>
    </div>
  )
}

const PersonForm = ({persons, setPersons}) => {
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')

  const handleFormSubmission = (event) => {
    event.preventDefault()
    if(persons.find(pers => pers.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const newPers = {
      name: newName,
      number: newPhone
    }
    setPersons(persons.concat(newPers))
    setNewName('')
    setNewPhone('')
  }

  return (
    <form onSubmit={handleFormSubmission}>
      <PersonName newName={newName} setNewName={setNewName}/>
      <PersonPhone newPhone={newPhone} setNewPhone={setNewPhone}/>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

const PersonName = ({newName, setNewName}) => {
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      name: <input value={newName} onChange={handleNameChange}/>
    </div>
  )
}

const PersonPhone = ({newPhone, setNewPhone}) => {
  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  return (
    <div>
      number: <input value={newPhone} onChange={handlePhoneChange}/>
    </div>
  )
}

const People = ({filter, persons}) => {
  const lcFilter = filter.toLowerCase()
  const filtered = persons.filter(p => p.name.toLowerCase().includes(lcFilter))
  
  return filtered.map(pers => 
      <p key={pers.name}>
        {pers.name} {pers.number}
      </p>
  )
}

const Filter = ({filter, handleChange}) => {
  return (
    <div>
      filter shown with: 
        <input value={filter} 
                onChange={handleChange}/>
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)