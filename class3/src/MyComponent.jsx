 
   import React from 'react'
   import MyComponent1 from "./MyComponent1";

 // Syntax-1

    // function MyComponent(){}
    //  export default MyComponent;

    
 // Syntax-2

    export default function MyComponent(){
        return(
            <div className="row">
              <div className="col">
              <h1>Welcome to MyComponent Function (CHILD-COMPONENT)</h1>
              </div>
              <MyComponent1/>
            </div>
        );
    }
    