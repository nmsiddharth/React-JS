import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const url = 'https://jsonplaceholder.typicode.com'
const UserAPI = () => {
    const [user, setUser] = useState([]);

    const getUsers = useCallback(()=>{
        const readUsers = async () => {
            const res = axios.get(`${url}/users`)
           .then((out)=> {
            console.log(out);
            setUser(out.data);
           }).catch(error => toast.error(error.message));
        }
        readUsers();
    }, []);

    useEffect(()=>{getUsers()}, []);

    return {
        users: [user, setUser]
    }
}

export default UserAPI