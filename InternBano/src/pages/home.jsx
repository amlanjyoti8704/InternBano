import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/hero.jsx'
import JobListing from '../components/jobListing.jsx'
import Footer from '../components/footer.jsx'

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <JobListing />
            <Footer />
        </>
    )
}

export default Home
