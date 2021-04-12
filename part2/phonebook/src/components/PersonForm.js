import React, { useState } from 'react'
import PersonName from './PersonName'
import PersonPhone from './PersonPhone'
import numberClient from '../services/numbers'

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

      numberClient.create(newPers)
      .then(returnedPers => {
        setPersons(persons.concat(returnedPers))
        setNewName('')
        setNewPhone('')
      })
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

export default PersonForm