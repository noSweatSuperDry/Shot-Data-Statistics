import React, { Component } from 'react'
import Footer from './Footer'
import FetchData from './Components/FetchButton'
import Header from './Header'
import HitOrMiss from './Components/HitOrMiss'
import HitInCentre from './Components/HitCentre'


export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <FetchData />
        <HitOrMiss />
        <HitInCentre /> 
        <Footer />
      </div>
    )
  }
}

export default App