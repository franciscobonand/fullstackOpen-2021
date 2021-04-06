import ReactDOM from 'react-dom'
import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value)
  }

  const handleFormSubmission = (event) => {
    event.preventDefault()
    const newPers = {
      name: newName
    }
    setPersons(persons.concat(newPers))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleFormSubmission}>
        <div>
          name: <input value={newName}
                        onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map(pers => 
          <p key={pers.name}>
            {pers.name}
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