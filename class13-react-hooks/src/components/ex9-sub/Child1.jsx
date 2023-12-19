import React, { Fragment } from 'react'
import GrandChild1 from './sub/GrandChild1';

const Child1 = (props) => {
    const {age, name} = props.userDetails;
  return (
    <Fragment>
        <div className="row">
            <div className="col-12 text-center">
                <h2 className="text-secondary">This is Child Component - 1</h2>
            </div>
            <div className="col-12">
                <div className="lead border p-3 rounded">
                    <p>User Age = <span>{age}</span></p>
                    <p>User Name = <span>{name}</span></p>
                </div>
            </div>
    </div>
    <GrandChild1 userDetails = {props.userDetails}/>
    </Fragment>
  )
}

export default Child1