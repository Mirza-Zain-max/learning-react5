import React from 'react'
import Hero from './Hero'
import Categories from './Categories'
import Customer from './Customer'
import CardSection from './CardSection'
import CardSection2 from './CardSection-2'

const index = () => {
    return (
        <main>
            <Hero />
            <CardSection/>
            <CardSection2/>
            <Categories/>
            <Customer/>
        </main>
    )
}

export default index