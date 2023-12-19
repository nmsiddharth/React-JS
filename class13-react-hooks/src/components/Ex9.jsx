import React, { createContext, useState } from 'react'
import Child1 from './ex9-sub/Child1'
import GrandChild2 from './ex9-sub/sub/GrandChild2';
import Child2 from './ex9-sub/Child2';

export const userDetailsContext = createContext(null);

const Ex9 = () => {
    const [userDetails, setuserDetails] = useState({
        name: "Siddu",
        age: 30
    })

  return (
    <div className="container">
    <div className="row">
        <div className="col text-center">
            <h2 className="display-3 text-primary">createContext and useContext Hook</h2>
            <p>It is used to create  common data that can be accessed throughout the component hierarchy.</p>
        </div>
    </div>
    <hr />
    <div className="row">
        <div className="col text-center">
            <h3 className="display-6 text-secondary">This is the Parent Component.</h3>
        </div>
    </div>
    <hr />
    <Child1 userDetails = {userDetails}/>
    <userDetailsContext.Provider value={userDetails}>
        {/* We are passing our state as a value in provider */}
       <Child2/>
    </userDetailsContext.Provider>
  </div>
  )
}

export default Ex9