import React, { useState } from 'react'
import UserForm from '../middleWare/FormValidate'

const Create = () => {

  // const [contact, setContact] = useState({
  //   name: '',
  //   email: '',
  //   image: '',
  //   mobile: '',
  //   address: ''
  // });

  // // Read Value from Input
  // const readValue = (e) => {
  //  //console.log(e.target.name, "-",  e.target.value)
  //  const {name, value} = e.target;
  //  setContact({...contact, [name]:value});
  // }

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   console.log(contact);
  // }

  const {contact, errors, readValue, submitHandler} =  UserForm();
  
  return (
   <div className="container">
    <div className="row">
      <div className="col">
        <h5 className="display-3 text-center">Create</h5>
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6 offset-xxl-3 col-xxl-6">
        <div className="card p-3">
          <div className="card-body">
            <form autoComplete='off' onSubmit={submitHandler}>
              <div className="form-group my-2">
                <label htmlFor="name">Name</label>
                <input 
                type="text" 
                name='name' 
                id='name' 
                className='form-control' 
                required
                minLength={4} 
                maxLength={10} 
                onChange={readValue}
                value={contact.name}/>
                {
                  errors.name ? (<div className='alert alert-danger'>
                    {errors.name}
                  </div>) : null
                }
              </div>

              <div className="form-group my-2">
                <label htmlFor="email">Email</label>
                <input 
                type="email" 
                name='email' 
                id='email' 
                className='form-control' 
                required 
                placeholder='username@gmail.com' 
                onChange={readValue}
                value={contact.email}/>
                {
                  errors.email ? (<div className='alert alert-danger'>
                    {errors.email}
                  </div>) : null
                }
              </div>

              <div className="form-group my-2">
                <label htmlFor="image"> Profile Image</label>
                <input 
                type="url" 
                name='image' 
                id='image' 
                className='form-control' 
                required 
                placeholder='Enter url format of image link' 
                onChange={readValue}
                value={contact.image}/>
                {
                  errors.image ? (<div className='alert alert-danger'>
                    {errors.image}
                  </div>) : null
                }
              </div>

              <div className="form-group my-2">
                <label htmlFor="mobile">Mobile</label>
                <input 
                type="number" 
                name='mobile' 
                id='mobile' 
                className='form-control' 
                required 
                onChange={readValue}
                value={contact.mobile}/>
                {
                  errors.mobile ? (<div className='alert alert-danger'>
                    {errors.mobile}
                  </div>) : null
                }
              </div>

              <div className="form-group my-2">
                <label htmlFor="address">Address</label>
                <textarea 
                name="address" 
                id="address" 
                cols="30" 
                rows="5"
                required
                className='form-control'
                placeholder='Address'
                onChange={readValue}
                value={contact.address}>
                  {
                  errors.address ? (<div className='alert alert-danger'>
                    {errors.address}
                  </div>) : null
                }
                </textarea>
              </div>

              <div className="form-group my-2">
                <input 
                type="submit" 
                value="Create"
                className='btn btn-outline-success'
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Create