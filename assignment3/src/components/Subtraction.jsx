import React, {useState} from 'react'

const Subtraction = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [diff, setDiff] = useState();

  function num1Handler(e) {
    setNum1(e.target.value);
  }

  function num2Handler(e) {
    setNum2(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    setDiff(Number(num1) - Number(num2));
    console.log(diff); 
  }
  return (
    <div className="px-5 my-2">
    <center>
      <h1 className='text-secondary my-3'>Subtraction</h1>
    </center>
    <form onSubmit={submitHandler}>
      <div className="row g-3">
        <div className="col-3">
        <h4>Number 1</h4>
          <input type="text" className='form-control' onChange={num1Handler} />
          <h4 className='my-3'>Number 2</h4>
          <input type="text" className='form-control' onChange={num2Handler} />
        </div>
        <div className="col">
         
        </div>
      </div>
      <div className="row">
        <div className="col d-flex justify-content-center">
          <input type="submit" value="Submit" className='my-5 px-5 py-2 btn btn-outline-success'/>
        </div>
      </div>
    </form>
      <div className="d-flex justify-content-center">
        <h3 className='text-success'>Subtraction of {`${num1} - ${num2}`} is = {`${diff}`}</h3>
      </div>
  </div>
  )
}

export default Subtraction