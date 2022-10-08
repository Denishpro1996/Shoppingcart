import React from 'react'
import { Navigate,Outlet } from 'react-router'

const PrivalteComponent = () => {
    const auth = localStorage.getItem('user');
    return auth?<Outlet/>:<Navigate to='/signup'/>
}
export default PrivalteComponent
