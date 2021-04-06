import ReactDOM from 'react-dom'
import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
      number: '040-1234567'}
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    console.log(event.target.value);
    setNewPhone(event.target.value)
  }

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
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleFormSubmission}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newPhone} onChange={handlePhoneChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map(pers => 
          <p key={pers.name}>
            {pers.name} {pers.number}
          </p>
        )
      }
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)