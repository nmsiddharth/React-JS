import React from 'react'

const Ex7 = (props) => {
    const {img, name, lorem} = props;
  return (
    <div className='row'>
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <h1 className='bg-warning text-white p-2 text-center'>React Functional DefaultProps</h1>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <div className="lead border p3">
                <h2 style={{backgroundColor:props.color}}>{props.name}</h2>
            </div>
        </div>
    </div>
  )
}

Ex7.defaultProps={
    color:"#000",
    name : "React Functional DefaultProps"
}
export default Ex7;