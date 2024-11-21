import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import FrontendIndex from '../Frontend'
import PublicRoutes from './publicRoutes'
import PrivateRoutes from './privateRoutes'
import Login from '../Auth/Login'
import Register from '../Auth/Regsiter'
import Frogot from '../Auth/Forgot'

const Index = () => {
  return (
    <>
      <Routes>
        <Route path='/*' element={<FrontendIndex />} />
        <Route path='/private' element={<PrivateRoutes />}>
        </Route>
        <Route path='/auth/*' element={<PublicRoutes />}>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='forgot' element={<Frogot />} />
        </Route>
      </Routes>
    </>
  )
}

export default Index