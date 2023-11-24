import React from "react";
import { useState } from "react";

const Header = (props) => {
  const [h1, setH1] = useState();
  const [h2, setH2] = useState();

     const submitHandler = (e)=>{
      e.preventDefault();
      console.log(h1);
}

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="text-center text-primary text-decoration-underline my-3">
            ARTHEMATIC OPERATIONS USING REACT
          </h1>
        </div>
      </div>
      <form className="row g-3 my-3">
        <div className="col-auto">
          <label for="staticEmail2" className="fw-bold">
            Enter Input 1 :
          </label>
        </div>
        <div className="col-auto">
          <input type="number" className="form-control" id="i1" onChange={(e)=>setH1(e.target.value)}/>
        </div>
      </form>
      <form className="row g-3 my-3">
        <div className="col-auto">
          <label for="staticEmail2" className="fw-bold">
            Enter Input 2 :
          </label>
        </div>
        <div className="col-auto">
          <input type="number" className="form-control" id="i2" />
        </div>
      </form>
    <div className="col text-center">
    <button type="button" class="btn btn-primary m-4" onClick={submitHandler}>Addition</button>
      <button type="button" class="btn btn-secondary m-4">Subtraction</button>
      <button type="button" class="btn btn-warning m-4">Multiplication</button>
      <button type="button" class="btn btn-danger m-4">Division</button>
      <button type="button" class="btn btn-dark m-4">Modulo</button>
    </div>

      <div className="row">
        <div className="col">
            <h1 className="text-success text-center m-5">Output</h1>
        </div>
      </div>

    </div>
    
  );
};

export default Header;
