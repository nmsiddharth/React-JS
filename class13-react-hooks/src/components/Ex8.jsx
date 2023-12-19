import React, { useMemo, useState } from 'react'
import Age from './ex8-sub/Age';
import AgeInfo from './ex8-sub/AgeInfo';

const Ex8 = () => {
  const [age, setAge] = useState(30);

  const incrementAge = () => {
    setAge(age + 1);
  }

  const updateAge = () => {
    return `David age is ${age} years`;
  };

  useMemo(()=>{
    return updateAge();
  }, [age]);

  return (
    <div className="container">
    <div className="row">
        <div className="col text-center">
            <h2 className="display-3 text-primary">useMemo Hook</h2>
            <p>useMemo returns the memorized callback version.</p>
            <p>useMemo will only recompute the memorised value when one of the deps has changed.</p>
        </div>
    </div>
    <hr />
    <Age age={age} ageHandler ={incrementAge}/>
    <hr />
    <AgeInfo updateAge = {updateAge}/>
  </div>
  )
}

export default Ex8