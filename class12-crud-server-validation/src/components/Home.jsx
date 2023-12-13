import axios from 'axios';
import { toast } from "react-toastify";
import React, { useEffect, useState } from 'react'
import UserCard from './UserCard';

const baseURL = "http://localhost:3000";

const Home = () => {
  const [contacts, setContacts] = useState([]);
  
  const getContacts = async () => {
    await axios
    .get(`${baseURL}/contacts`)
    .then(res=>{
      console.log("Contacts = ",res);
      setContacts(res.data)})  
    .catch((err)=> {toast.error(err.message)});
  }

  useEffect(()=>{getContacts();}, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <h5 className="display-3 fw-bold">Contact List</h5>
        </div>
      </div>
      <div className="row">
          {
            contacts && contacts.map((item, index) => {
              return (
                <UserCard key = {index} contacts = {item}/>
              )
            })
          }  
      </div>
    </div>
  )
}

export default Home