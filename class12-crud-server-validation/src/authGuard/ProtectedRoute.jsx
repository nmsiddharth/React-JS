import React from 'react'
import { Fragment } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {

    let loginStatus = localStorage.getItem("loginStatus") || false;
  return (
   <Fragment>
        {
            loginStatus ? <Outlet /> : <Navigate to = {`/login`} />
        }
   </Fragment>
  )
}

export default ProtectedRoute