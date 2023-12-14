import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import UserForm from '../middleWare/FormValidate';
import axios from 'axios';
import { toast } from 'react-toastify';

const baseURL = "http://localhost:3000";

const Update = () => {

  const params = useParams();
  const {contact, errors, readValue, submitHandler, setContact} = UserForm();

  useEffect(()=> {
    axios
    .get(`${baseURL}/contacts/${params.id}`)
    .then((res)=>{
      console.log(res);
      setContact(res.data);
    })
    .catch((error)=>{toast.error(error.message)});
  }, []);


  const navigate = useNavigate();

  let updateHandler = async (e) =>{
    e.preventDefault();
    await axios
    .put(`${baseURL}/contacts/${params.id}`, contact)
    .then((res)=> {
      toast.success("User Updated");
      navigate("/");
    })
    .catch((error)=>{toast.error(error.message)});
  }

  return (
   <div className="container">
    <div className="row">
      <div className="col">
        <h5 className='display-3 text-center fw-bold'>Update {params.id}</h5>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12 col-sm-12 offset-md-3 col-md-6 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6 offset-xxl-3 col-xxl-6">
        <div className="card p-3">
          <div className="card-body">
            <form autoComplete="off" onSubmit={updateHandler}>
              <div className="form-group my-2">
                <label htmlFor="name">Name</label>
                <input 
                type="text" 
                className='form-control' 
                name='name' 
                id='name' 
                required
                minLength={4}
                maxLength={15}
                onChange={readValue}
                value={contact.name}/>
                {errors.name ? (
                  <div className='alert alert-danger'>{errors.name}</div>
                ) : null}
              </div>
              <div className="form-group my-2">
                <label htmlFor="email">Email</label>
                <input 
                type="email" 
                className='form-control' 
                name='email' 
                id='email' 
                required
                onChange={readValue}
                value={contact.email}
                placeholder='user@domain.com'/>
                 {errors.email ? (
                  <div className='alert alert-danger'>{errors.email}</div>
                ) : null}
              </div>
              <div className="form-group my-2">
                <label htmlFor="image">Profile Image</label>
                <input 
                type="url" 
                className='form-control' 
                name='image' 
                id='image' 
                required
                onChange={readValue}
                value={contact.image}
                placeholder='Enter URL format of Image'/>
                 {errors.image ? (
                  <div className='alert alert-danger'>{errors.image}</div>
                ) : null}
              </div>
              <div className="form-group my-2">
                <label htmlFor="mobile">Mobile</label>
                <input 
                type="number" 
                className='form-control' 
                name='mobile' 
                id='mobile' 
                onChange={readValue}
                value={contact.mobile}
                required/>
                 {errors.mobile ? (
                  <div className='alert alert-danger'>{errors.mobile}</div>
                ) : null}
              </div>
              <div className="form-group my-2">
                <label htmlFor="address">Address</label>
                <textarea 
                cols='30'
                rows='5'
                className='form-control' 
                name='address' 
                id='address' 
                onChange={readValue}
                value={contact.address}
                required/>
                 {errors.address ? (
                  <div className='alert alert-danger'>{errors.address}</div>
                ) : null}
              </div>
              <div className="form-group my-2">
                <input 
                type="submit" 
                className='btn btn-outline-success' 
                value="Update"
                required/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Update