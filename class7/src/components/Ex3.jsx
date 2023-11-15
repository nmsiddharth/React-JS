import React, { Fragment, useState } from 'react'


const Ex3 = () => {
   
   // const [state, handler] = useState(initValue)
    let [num, setNum] = useState(0);
    const [isView, setIsView] = useState(true);
    const [count, setCount] = useState(0);

    const clickHandler = ()=>{
        setNum(num+1);
        setIsView(isView => !isView);
    }
  return (
   <Fragment>
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">

          <div className="lead my3 p-3 border">
            <p>
              <b>4) Update the state inside an onclick event handler</b>
            </p>
            <button className='btn btn-outline-info' 
            onClick={clickHandler}>
                Ex3 - Click Handler 
                </button>
                <p>Increment : {num}</p>
              
                <div className='border p-3'>
                    {
                        isView ? <h5 className='text-success'>WELCOME TO REACT</h5>: <h5 className='text-danger'>TRY NEXT TIME</h5>
                    }
                </div>
                  
                <button className='btn btn-outline-success m-3' onClick={()=> setCount(count + 1)}>Increment</button>

                <button className='btn btn-outline-danger' onClick={()=> setCount(count - 1)}>Decrement</button>
                <p><b>Result : </b>{count}</p>


          </div>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-12 text-center">

          <div className="lead my3 p-3 border">
            <p>
              <b>5) Use SYNTHETIC EVENTS = directly inside an onclick event handler</b>
            </p>
            <button className='btn btn-outline-info' 
            value="Be-Practical"
            onClick={(e)=> alert(e.target.value)}>
                Ex3 - Synthetic Handler 
                </button>
          </div>
        </div>
      </div>
    </div>
   </Fragment>
  )
}

export default Ex3;