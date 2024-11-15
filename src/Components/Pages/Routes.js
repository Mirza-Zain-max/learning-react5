import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FrontendIndex from '../Pages/Frontend'
import Auth from '../Pages/Auth'
// import DashBoard from '../Pages/DashBoard'

const index = () => {
  return (
    <>
      <Routes>
        <Route path='/*' element={<FrontendIndex />} />
        <Route path='/auth/*' element={<Auth />} />
        {/* <Route path='/dashboard/*' element={<DashBoard/>} /> */}
      </Routes>
    </>
  )
}

export default index