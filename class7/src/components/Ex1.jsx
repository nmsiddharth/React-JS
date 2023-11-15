import React, { Fragment } from 'react'

const Ex1 = () => {
    const showAlert = () => {
        alert('You clicked the button!')
    }
  return (
   <Fragment>
     <div className="container my-3">
      <div className="row">
        <div className="col-12 text-center">

          <div className="lead my3 p-3 border">
            <p>
              <b>2) React Event Listeners :</b>
            </p>
            <p>
                To listen to events in react, add the onClick attribute which is the event handler to the target element. This specifies the function to be exeuted when that element is clicked.
            </p>
            <button className='btn btn-outline-info' onClick={showAlert}>Ex1 - Show Alert</button>
          </div>
        </div>
      </div>
    </div>
   </Fragment>
  )
}

export default Ex1