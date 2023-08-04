import React from 'react'
import {Footer, Header, Possibility, WhatMEEZAK, Blog, Features} from './containers';
import { Article, Brand, Navbar, Feature, CTA } from './components';
import './App.css'

const App = () => {
  return (
    <div className="App">
      <div className='gradient__bg'>
      <Navbar />  
      <Header />
    </div>
      <Brand />
      <WhatMEEZAK />  
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App  