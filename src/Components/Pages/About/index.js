import React from 'react'
import AboutPage from './AboutPage'
import { Route, Routes } from 'react-router-dom'

const Index = () => {
  return (
  <main>
      <Routes>
      <Route path='about' element={<AboutPage/>}/>
    </Routes>
  </main>
  )
}

export default Index