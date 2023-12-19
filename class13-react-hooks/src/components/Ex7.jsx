import React, { useCallback, useState } from 'react'
import Age from './ex7-sub/Age';
import AgeInfo from './ex7-sub/AgeInfo';

// useCallback => will return memoized value of callback
// useMemo => will return memorised function of callback

const Ex7 = () => {
  const [age, setAge] = useState(10);

  const incrementAge = () => {
    setAge(age + 1);
  }

  const userAge = `David age is ${age} years`;
  const updateAge = useCallback(()=>{
    return userAge;
  }, [age]);

  return (
    <div className="container">
    <div className="row">
        <div className="col text-center">
            <h2 className="display-3 text-primary">useCallback Hook</h2>
            <p>useCallback will return a memoized version of the callback that only changes if one of the inputs has changed.</p>
        </div>
    </div>
    <hr />
    <Age age={age} ageHandler = {incrementAge}/>
    <hr />
    <AgeInfo ageInfo = {updateAge}/>
</div>
  )
}

export default Ex7