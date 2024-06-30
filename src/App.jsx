import React from 'react'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import Nav from './Nav.jsx'
import Hero from './Hero.jsx'
import Section1 from './Section1.jsx'
import Section2 from './Section2.jsx'
import Section3 from './Section3.jsx'
import Section4 from './Section4.jsx'
import Service from './Service.jsx'
import Gallery from './Gallery.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


const Home = () => (
  <div>
    <Nav/>
    <Hero />
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
  </div>
)

const Gal = () => (
  <div className='flex flex-col'>
    <Nav/>
    <Gallery/>
    <Section4 />
  </div>
)

const Contacts = () => (
  <div>
    <Nav/>
    <Service/>
    <Section4 />
  </div>
)


function App() {

  return (
    <MantineProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gal/>} />
          <Route path="/contacts" element={<Contacts/>} />
        </Routes>
      </Router>
    </MantineProvider>
)
}

export default App
