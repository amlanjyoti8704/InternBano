import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/hero.jsx'
import JobListing from '../components/jobListing.jsx'

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <JobListing />
        </>
    )
}

export default Home
