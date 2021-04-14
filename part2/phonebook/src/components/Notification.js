import React from 'react'
import '../index.css'

const Notification = ({ msgObj }) => {
    if (msgObj.msg === null) {
      return null
    }
    
    if (msgObj.ok) {
        return (
            <div className="okRequest">
              {msgObj.msg}
            </div>
        )
    } else {
        return (
            <div className="failedRequest">
              {msgObj.msg}
            </div>
        )
    }
    
}

export default Notification