import React from 'react'
// import Header from '../../Header'
import NavHeader from 'Components/navHeader/navHeader'
import Home from './Home'
import About from '../About'
import Footer from '../../Footer'

const FrontendIndex = () => {
  return (

    <>
      {/* <Header /> */}
      <NavHeader />
      <Home />
      <About/>
      <Footer />
    </>
  )
}

export default FrontendIndex