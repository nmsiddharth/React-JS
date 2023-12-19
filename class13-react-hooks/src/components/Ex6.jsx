import React, { createRef, useRef, useState } from 'react'

const Ex6 = () => {
  const textInput1 = createRef();
  const focusTextInput1 = () => {
    textInput1.current.focus();
    console.log(textInput1);
    console.log(textInput1.current.value);
  };

  const textInput2 = useRef();
  const focusTextInput2 = () => {
    textInput2.current.focus();
    console.log(textInput2);
    console.log(textInput2.current.value);
  };

  const [renderIndex, setRenderIndex] = useState(1);
  const refFromUseRef = useRef();
  const refFromCreateRef = createRef();

  if(!refFromUseRef.current){
    refFromUseRef.current = renderIndex
  }
  if(!refFromCreateRef.current){
    refFromCreateRef.current = renderIndex
  }

  const myName = useRef();
  const myEmail = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const data ={
      name:myName.current.value,
      email:myEmail.current.value
    };
    console.log(data)
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <h3 className="display-3 text-primary">useRef & createRef Hook</h3>
        </div>
      </div>
      <hr />
      <div className="row my-3">
        <div className="col">
          <div className="card text-center">
            <div className="card-body">
              <div className="p-3 border my-3">
                <h3 className="text-warning">createRef Example..! <b className='text-dark'>( In Class Component )</b></h3>
                <p>
                  <b>Note : </b>
                  createRef will always create a new ref
                  <b>
                    (REF = A ref is a plain JS object. React elements via the ref attribute)
                  </b>
                 . In a class-based component, you would typically put the ref in an instance property during construction (eg. this.input = createRef()). (Used in Class Component)
                </p>
                <input type="text" name='createRef' id='createRef' className='form-control my-3' placeholder='Enter Text' ref={textInput1}/>
                <button className='btn btn-warning' onClick={focusTextInput1}>Focus the text input</button>
              </div>
              <div className="p-3 border my-3">
                <h3 className="text-warning">useRef Example..! <b className='text-dark'>( In Function Component )</b></h3>
                <p>
                  <b>Note : </b>
                 You don't have the above option in a function component.      useRef takes care of returning the same ref each time as on the initial rendering. 
                </p>
                <input type="text"className='form-control my-3' placeholder='Enter Text' ref={textInput2}/>
                <button className='btn btn-success' onClick={focusTextInput2}>Focus the text input</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="card text-start">
            <div className="card-body">
              <h4 className="card-title">Example-1</h4>
              <p className="card-text">Current render index : <b>{renderIndex}</b></p>
              <p className="card-text">First render index remembered within <b>refFromUseRef.current</b> : <b>{refFromUseRef.current}</b></p>
              <p className="card-text">First render index unsuccessfully remembered within <b>refFromCreateRef.current</b> : <b>{refFromCreateRef.current}</b></p>
              <button className='btn btn-success' onClick={()=> setRenderIndex(renderIndex + 1)}>Cause Re-render</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="card text-start">
            <div className="card-body">
              <h4 className="card-title">Example-1</h4>
              <form onSubmit={submitHandler}>
                <div className="form-group mt-2">
                  <label htmlFor="name">Name</label>
                  <input 
                  type="text"
                  name='name' 
                  id='name'
                  ref={myName}
                  className='form-control'
                  required
                  />
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="email">Email</label>
                  <input 
                  type="email"
                  name='email' 
                  id='email'
                  ref={myEmail}
                  className='form-control'
                  required
                  />
                </div>
                <div className="form-group mt-2">
                  <input 
                  type="submit"
                  value="Submit"
                  className='btn btn-success'
                  required
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="card my-3">
            <div className="card-body">
              <h4 className="card-title">Important Note : </h4>
              <p>A ref is a plain JS object (current:some value)</p>
              <p>React.createRef() is a factory returning a ref (current: null)</p>
              <p>useRef(initValue) also returns a ref (current: initValue) akin to React.createRef(). Besides, it memorizes this ref to be persistant across multiple renders in a function component.</p>
              <p>It is sufficient to use React.createRef in class components, as the ref object is assigned to an instance variable, hence accessible throughout the component and its lifecycle.</p>
              <p><strong>Replace useRef with useState + createRef</strong></p>
              <p>1). useRef() is basically useState(current: initValue)[0].</p>
              <p>2). useRef(null) is basically useState(React.createRef())[0].</p>
              <p>3). useState causes a re-render in contrast to useRef. More formally, Reat compares the old and new object reference for useState, when a new value is set via its setter method. If we mutate the state of useState directly (opposed to setter invocation), its behaviour more or less becomes equivalent to useRef, as no re-render is triggered anymore:</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ex6