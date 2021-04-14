import ReactDOM from 'react-dom'
import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import People from './components/People'
import Filter from './components/Filter'
import Notification from './components/Notification'
import numberClient from './services/numbers'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newFilter, setNewFilter ] = useState('')
  const [ message, setMsg ] = useState({msg: '', ok: false})

  useEffect(() => {
    numberClient.getAll()
    .then(people => setPersons(people))  
  }, [])

  setTimeout(() => {
    setMsg({msg: '', ok: false})
  }, 5000)

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
        {message.msg ? <Notification msgObj={message}/> : null}
        <Filter filter={newFilter} handleChange={handleFilterChange}/>
      <h2>Add a new</h2>
        <PersonForm persons={persons} setPersons={setPersons} setMsg={setMsg}/>
      <h2>Numbers</h2>
        <People filter={newFilter} persons={persons} setPersons={setPersons}/>
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)