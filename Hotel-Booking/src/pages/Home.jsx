import React from 'react'

import Hero from '../components/Hero'
import Featured from '../components/Featured'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import About from './About'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Featured/>
      <About/>
      <Newsletter/>
    </div>
  )
}
