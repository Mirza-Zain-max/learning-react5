import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'

const index = () => {
  return (
    <>
      <Routes>
        <Route path='*' element={<Navbar />} />
      </Routes>
    </>
  )
}

export default index