import React from 'react'

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

export default PersonPhone