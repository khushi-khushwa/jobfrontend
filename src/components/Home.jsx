import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import CategoryCarousal from './CategoryCarousal'
import LatestJob from './LatestJob'
import Contactmore from './contactmore'
import Footer from './Footer'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
    <CategoryCarousal/>
     <LatestJob/>
     <Contactmore/>
     
    <Footer/>
    </div>
  )
}

export default Home
