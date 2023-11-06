import React from 'react'
import Details from './Details'

function Bank(props) {
  return (
    <div>
        {
            props.details.map((item,index)=>{
                return(
                    // <div key={index}>
                    //     <b className='text-danger text-decoration-underline'>Bank : {index+1}</b>
                    //     <p><b>Account Number : {item.accNo}</b></p>
                    //     <p><b>Bank Name : {item.bName}</b></p>
                    //     <p><b>Account Type : {item.type}</b></p>
                    // </div>

                    <Details key={index} {...item}/>
                )
            })
        }
        </div>
  )
}

export default Bank