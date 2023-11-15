import React, { Fragment, useState } from 'react'

// useState = hook -> functional components
// state variables => value
// state handler => method => used to change/modify the values of the state

const Ex2 = () => {
   
   // const [state, handler] = useState(initValue)
    let [count, setCount] = useState(1);

    const sayHello = (parameter1)=>{
        alert(`Hello!, ${parameter1}`);
    }
  return (
   <Fragment>
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">

          <div className="lead my3 p-3 border">
            <p>
              <b>3) Call multiple functions in an onClick event handler</b>
            </p>
            <button className='btn btn-outline-info' 
            onClick={()=>{
                sayHello("Siddu");
                setCount(count+1);
            }}>
                Ex2 - Say Hello and Increment 
                </button>
                <p>Increment : {count}</p>
          </div>
        </div>
      </div>
    </div>
   </Fragment>
  )
}

export default Ex2