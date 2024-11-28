import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import FrontendIndex from '../Frontend'
import NavHeader from 'Components/navHeader/navHeader'
import Home  from '../Frontend/Home'
import About from '../About'
import PublicRoutes from './publicRoutes'
import PrivateRoutes from './privateRoutes'
import Login from '../Auth/Login'
import Register from '../Auth/Regsiter'
import Frogot from '../Auth/Forgot'
import Footer from '../../Footer'
import Todo from '../Todos/Todo'

const Index = () => {
  return (
    <>
      <NavHeader />
      <Routes>
        {/* <Route path='/*' element={<FrontendIndex />} /> */}
        <Route path='/' element={<PrivateRoutes />}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About />} />
        <Route path='/todos' element={<Todo/>}/>
        </Route>
        <Route path='/auth/*' element={<PublicRoutes />}>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='forgot' element={<Frogot />} />
        </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default Index