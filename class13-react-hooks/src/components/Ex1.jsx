import React, { useState } from 'react'

const Ex1 = () => {

    // const [state, stateHandler] = useState(initValue); to declare react State Hooks
  const [counter, setCounter] = useState(0);
  const [title, setTitle] = useState("welcome to react");
  const [isView, setIsView] = useState(true);
  const [colors, setColors] = useState(["red", "green", 'blue']);
  const [user, setUser] = useState({
    name: "sid",
    email:"sid@gmail.com"
  });
  const [inputValue, setInputValue] = useState("React Hooks");


    let count = 0;
    
    const handleClick = () => {
        count = count + 1;
        // console.log(count);
        setCounter(counter + 1);
        setIsView(!isView);
        setTitle("Welcome to JAVA");
    }

    const onChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
        //console.log(newValue);
    }

  return (
    <div className="container">
        <div className="row">
            <div className="col">
                <h5 className="display-3 text-center text-success">useState( ) Hook</h5>
                <p className='text-secondary'>That allows you to have a State variables in FUNCTIONAL COMPONENT. </p>
            </div>
        </div>
        <div className="row">
            <div className="col">
             <div className="lead p-3 border rounder">
                <h3>Example-1</h3>
             <p><b>Count = </b>{count}</p>
                <button type='button' className='btn btn-outline-info' onClick={handleClick}>Increment</button>
             </div>
            </div>
        </div>
        <div className="row my-3">
            <div className="col">
             <div className="lead p-3 border rounder">
                <h3>Example-2</h3>
             <p><b>Counter = </b>{counter}</p>
                <button type='button' className='btn btn-outline-info' onClick={handleClick}>Increment</button>
             </div>
            </div>
        </div>
        <div className="row my-3">
            <div className="col">
             <div className="lead p-3 border rounder">
                <h3>Example-3</h3>
             <p><b>Title = </b>{title}</p>
             <p><b>isView = </b>{isView ? "Hi Siddu" : "Bye Siddu"}</p>
                <button type='button' className='btn btn-outline-info' onClick={handleClick}>Increment</button>
             </div>
            </div>
        </div>
        <div className="row my-3">
            <div className="col">
             <div className="lead p-3 border rounder">
                <h3>Example-4</h3>
             <p><b>Colors = </b>{colors}</p>
             <p><b>Colors = </b>{colors && colors.map((item, index)=>{
                return (<p key={index}>{item}</p>)
             })}</p>

                <button type='button' className='btn btn-outline-info' onClick={handleClick}>Increment</button>
             </div>
            </div>
        </div>
        <div className="row my-3">
            <div className="col">
             <div className="lead p-3 border rounder">
                <h3>Example-5</h3>
             <p><b>User Name = </b>{user.name}</p>
             <p><b>User Email = </b>{user.email}</p>
                <button type='button' className='btn btn-outline-info' onClick={handleClick}>Increment</button>
             </div>
            </div>
        </div>
        <div className="row my-3">
            <div className="col">
             <div className="lead p-3 border rounder">
                <h3>Example-6</h3>
                <input type='text' className='form-control' name='name' id='name' placeholder='Enter some Text' onChange={onChange}/>
                <p><b>Input Value = </b>{inputValue}</p>
                <button type='button' className='btn btn-outline-info' onClick={handleClick}>Increment</button>
             </div>
            </div>
        </div>
    </div>
  )
}

export default Ex1