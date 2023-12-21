import React, { useContext } from 'react'
import UserAPI from '../API/UserAPI'
import { DataContext } from '../context/Context'
import UserCard from './UserCard';

const Users = () => {
    const context = useContext(DataContext);
    const [users] = context.userApi.users;

    //console.log("This is users Component =", users);

  return (
 <div className='container'>
    <div className="row">
      <div className="col">
        <h1 className="text-secondary text-center">Users</h1>
      </div>
    </div>
    <div className="row">
      {
        users && users.map((item, index)=> {
          return(<UserCard key={index} {...item}/>)
        })
      }
    </div>
 </div>
  )
}

export default Users