import React from 'react'

const Filter = ({filter, setFilter}) => {
    const updateFilter = (event) => {
        setFilter(event.target.value)
    }
    return (
        <div style={{fontWeight: "bold"}}>
            Find countries: {' '}
            <input value={filter} onChange={updateFilter}/>
        </div>
    )
}

export default Filter