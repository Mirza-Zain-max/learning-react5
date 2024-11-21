import NavHeader from 'Components/navHeader/navHeader'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Navbar from './Navbar'

const index = () => {
  return (
    <>
      <Routes>
        {/* <Route path='/*' element={<Navbar />} /> */}
        <Route path='/*' element={<NavHeader />} />
      </Routes>
    </>
  )
}

export default index