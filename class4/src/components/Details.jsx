import React from 'react'

function Details(props) {
  return (
    <div className='border lead p-2 radius m-3'>
        <p><b>Account Number : {props.accNo}</b></p>
        <p><b>Bank Name : {props.bName}</b></p>
        <p><b>Account Type : {props.type}</b></p>
    </div>
  )
}

export default Details