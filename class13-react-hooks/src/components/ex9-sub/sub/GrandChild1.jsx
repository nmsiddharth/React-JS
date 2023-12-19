import React, { Fragment } from 'react'

const GrandChild1 = (props) => {
    const {age, name} = props.userDetails;

  return (
    <Fragment>
    <div className="row my-3">
        <div className="col-12 text-center">
            <h2 className="text-secondary">This is Grandchild Component - 1</h2>
        </div>
        <div className="col-12">
            <div className="lead border p-3 rounded">
                <p>User Age = <span>{age}</span></p>
                <p>User Name = <span>{name}</span></p>
            </div>
        </div>
</div>
</Fragment>
  )
}

export default GrandChild1