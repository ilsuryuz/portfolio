import React from 'react'
import Header from './Header'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Footer from './Footer'
import Contact from './Contact'
function Main() {
  return (
    <div className='main-content'>
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </div>
  )
}

export default Main