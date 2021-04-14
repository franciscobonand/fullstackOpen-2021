import React, { useState } from 'react'
import PersonName from './PersonName'
import PersonPhone from './PersonPhone'
import numberClient from '../services/numbers'

const samePersMsg = "is already added to the phonebook," +
                    " replace the old number with a new one?"

const PersonForm = ({persons, setPersons, setMsg}) => {
    const [ newName, setNewName ] = useState('')
    const [ newPhone, setNewPhone ] = useState('')

    const handleFormSubmission = (event) => {
        event.preventDefault()
        const existentPers = persons.find(pers => pers.name === newName)
        const newPers = {
            name: newName,
            number: newPhone
        }

        if(!existentPers) {
            numberClient.create(newPers)
                .then(returnedPers => {
                    setPersons(persons.concat(returnedPers))
                    setMsg({msg:`Added ${newPers.name}`, ok:true})
                })
        } else if (window.confirm(`${existentPers.name} ${samePersMsg}`)) {
            numberClient.updatePers(existentPers.id, newPers)
                .then(updated => {
                    setPersons(persons.map(p => p.name !== updated.name ? p : updated))
                    setMsg({msg:`Update ${newPers.name}'s number`, ok:true})
                })
                .catch(err => {
                    setMsg({msg:`Information of ${newPers.name} has already been removed from server`,
                            ok:false})

                    setPersons(persons.filter(p => p.name !== newPers.name))
                })
        }
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

export default PersonForm