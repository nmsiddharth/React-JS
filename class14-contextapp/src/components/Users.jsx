import React, { useContext } from 'react'
import UserAPI from '../API/UserAPI'
import { DataContext } from '../context/Context'

const Users = () => {
    const context = useContext(DataContext);
    const [users] = context.userApi.users;

    console.log("This is users Component =", users);
  return (
 <div>
    Hello
 </div>
  )
}

export default Users