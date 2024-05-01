import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from './Components/Hero/Hero.jsx'
import Programs from './Components/Programs/Programs.jsx'
import Title from './Components/Title/Title.jsx'
import About from './Components/About/About.jsx'
import Campus from './Components/Campus/Campus.jsx'
import Testimonials from './Components/Testimonials/Testimonials.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer.jsx'

const App = () => {

  const [playState, setPlayState] = useState(false)

  return (
    <div>
      <Navbar />
      <Hero />
      <Title subTitle='our program' title='What We Offer'/>
      <Programs />
      <About setPlayState={setPlayState}/>
      <Title subTitle='gallery' title='Campus Photoes' />
      <Campus />
      <Title subTitle='testimonials' title='What Student Says' />
      <Testimonials />
      <Title subTitle='contact us' title='Get in Touch' />
      <Contact />
      <Footer />
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App