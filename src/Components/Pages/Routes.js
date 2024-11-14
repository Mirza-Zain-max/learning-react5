import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FrontendIndex from '../Pages/Frontend'
import Auth from '../Pages/Auth'

const index = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<FrontendIndex />} />
        <Route path='/auth/*' element={<Auth/>} />
      </Routes>
    </>
  )
}

export default index