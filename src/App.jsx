import React from 'react'
import HeroBanner from './components/views/home/HeroBanner'
import FeaturedPlants from './components/views/home/FeaturedProduct'
import TopCategories from './components/views/home/TopCategories'
import Testimonials from './components/views/home/Testimonials'
import NewsletterSignup from './components/views/home/NewsletterSignup'

const App = () => {
  return (
    <>
    <HeroBanner/>
    <FeaturedPlants/>
    <TopCategories/>
    <Testimonials/>
    <NewsletterSignup/>
    
    </>
  )
}

export default App