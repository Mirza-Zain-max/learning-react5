import { useAuthContext } from 'Context/Auth'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
    const { isAuth } = useAuthContext()
    return isAuth ? <Outlet /> : <Navigate to={'/'} />
}

export default PrivateRoutes