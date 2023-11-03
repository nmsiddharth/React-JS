import React from 'react'

function Usercard(props) {
  return (
    <div className="row">
    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
      <div className="border p-2 lead radius">
        <p><b>ID : </b>{props.id}</p>
        <p><b>NAME : </b>{props.name}</p>
        <p><b>EMAIL : </b>{props.email}</p>
        <p><b>AGE : </b>{props.age} Years</p>
        <p><b>CITY : </b>{props.address.city}</p>
        <p><b>PIN : </b>{props.address.pin}</p>




      </div>
    </div>
  </div>
  )
}

export default Usercard