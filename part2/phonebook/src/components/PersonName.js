import React from 'react'

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

export default PersonName