import { useAuthContext } from 'Context/Auth'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRoutes = () => {
  const { isAuth } = useAuthContext()
  return isAuth ? <Navigate to={'/'}/> : <Outlet/>
}

export default PublicRoutes