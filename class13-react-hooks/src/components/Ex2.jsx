import React, { useReducer, useState } from 'react'

// Example-2
const reducer = (state, action) => {       // reducer function should be declared outside the main function (i.e.,,Ex2());
  switch (action.type) {
    case "INCREMENT":
      return {count : state.count + 1, showtext : state.showtext}
    
    case "TOGGLESHOWTEXT":
      return {count : state.count, showtext : !state.showtext}  
    default:
     return state  // Return empty state
  }
};

// Example-3
//Init State
const  initialState = {width: 50};

const reduce = (states, action) => {  
try {
  switch (action) {
    case "PLUS":
      return {width : states.width + 10};
    
    case "MINUS":
      return {width : Math.max( states.width - 10)};  
    default:
     throw new Error("Sorry, Not avalid action....");
  }
} catch (error) {
  console.log(error.message);
}
};

const Ex2 = () => {
  const [counter, setCounter] = useState(0);
  const [isView, setIsView] = useState(false);

  // const [state, dispatcher] = useReducer(reducer, initValue)

  // State =  It is used to declare variables or state
  // dispatcher = 1). It is used to call state object.
  //              2). Helps to pass an action constants through dispatcher.
  // reducer = 1). It is a function that is used for handling the actions.
  //           2). Action is used to determine what kind of action try to take.

  const [state, dispatcher] = useReducer(reducer, {count: 0, showtext: true});
  const [states, dispatch] = useReducer(reduce, initialState);


  const increment = () => {
    setCounter(counter+1);
    setIsView(!isView);
  }

  return (
   <div className="container">
    <div className="row">
      <div className="col">
        <h5 className="display-3 text-center text-success">useReducer Hook</h5>
        <p className='text-secondary'>useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.</p>
        <p className='text-secondary'>useReducer also lets you optimize performance for components that trigger deep updates.</p>
      </div>
    </div>
    <hr />
    <div className="row">
      <div className="col">
        <div className="lead p-3 border rounded my-3">
          <h3>Example-1</h3>
          <p><b>Counter = </b>{counter}</p>
          <p><b>isView = </b>{isView && <b>Condition is true</b>}</p>
          <p><b>isView = </b>{isView ? "Hi Siddu" : "Bye Siddu"}</p>
            <button type='button' className='btn btn-outline-info' onClick={increment}>Increment</button>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <div className="lead p-3 border rounded my-3">
          <h3>Example-2</h3>
          <p><b>Count = </b>{state.count}</p>
          <p><b>ShowText = </b>{state.showtext && "This is True"}</p>
          <button type='button' className='btn btn-outline-info' onClick={()=>{
            dispatcher({type: 'INCREMENT'});
            dispatcher({type: 'TOGGLESHOWTEXT'});
          }}>Reducer</button>

        </div>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <div className="lead p-3 border rounded my-3">
          <h3>Example-3</h3>
          <article className='bg-success my-3' style={{width: states.width}}>Article</article>
          <button type='button' className='btn btn-outline-info' onClick={()=>{
            dispatch('PLUS');
          }}>Increment</button>
           <button type='button' className='btn btn-outline-danger float-end' onClick={()=>{
            dispatch('MINUS');
          }}>Decrement</button>

        </div>
      </div>
    </div>
   </div>
  )
}

export default Ex2