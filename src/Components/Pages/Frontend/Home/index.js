import React from 'react'
import Hero from './Hero'
import About from './CardSection'
import AboutUs from './CardSection-2'
import Categories from './Categories'
import Customer from './Customer'

const index = () => {
    return (
        <main>
            <Hero />
            <About/>
            <AboutUs/>
            <Categories/>
            <Customer/>
        </main>
    )
}

export default index