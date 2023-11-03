import React from 'react'
import Usercard from './Usercard'



const UserComponent = (props) => {
  return (
    // <div className='row'>
    //     <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
    //         {props.userdata.map((user)=>(
    //        <div className='bg-primary p-3 m-2 text-white'>
    //          <h1 className='text-dark'>Name : {user.name}</h1>
    //          <p>Id : {user.id}</p>
    //          <p>Email : {user.email}</p>
    //          <p>Age : {user.age}</p>
    //          <p>Address : {user.address.city },
    //          Pincode :{user.address.pin}</p>

    //          <h4 className='text-danger'>Bank Details</h4>

    //          <h5 className='text-info'>Bank-1</h5>

    //         {/* <p>Account Number :{user.bank[0].accNo}</p>
    //         <p>Bank Name :{user.bank[0].bName}</p>
    //         <p>Account Type :{user.bank[0].type}</p> */}
    //         {user.bank.map((sid)=>
    //           <p>Account Number :{sid.accNo}<br/>
    //           Bank Name :{sid.bName}<br/>
    //         Account Type :{sid.type}</p>
    //         )}

    //          <h5 className='text-info'>Bank-2</h5>
    //         <p>Account Number :{user.bank[0].accNo}</p> 
            
           
    //        </div>
    //         ))}
    //     </div>
    // </div>
   <div>
    {
      props.userdata.map((item, index)=>{
        return(<Usercard key={index} {...item}/>)
      })
    }
   </div>
  )
}

export default UserComponent;