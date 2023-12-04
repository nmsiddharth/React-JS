import React, {useState} from 'react'

const Exponent = () => {
  const [num1, setNum1] = useState('');
  const [square, setSquare] = useState();

  function num1Handler(e) {
    setNum1(e.target.value);
  }

  
  function submitHandler(e) {
    e.preventDefault();
    setSquare(Number(num1) * Number(num1));
    console.log(square); // Display in console or use it in your UI
  }
  return (
    <div className="px-5 my-2">
      <center>
        <h1 className='text-secondary my-3'>Find Exponent of a Number</h1>
      </center>
      <form onSubmit={submitHandler}>
        <div className="row">
          <div className="col">
            <h4>Number 1</h4>
          </div>
        </div>
        <div className="row g-3">
          <div className="col-3">
            <input type="text" className='form-control' onChange={num1Handler} />
          </div>
        
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <input type="submit" value="Submit" className='my-5 px-5 py-2 btn btn-outline-success'/>
          </div>
        </div>
      </form>
        <div className="d-flex justify-content-center">
          <h3 className='text-success'>Square of {`${num1}`} is = {`${square}`}</h3>
        </div>
    </div>
  )
}

export default Exponent