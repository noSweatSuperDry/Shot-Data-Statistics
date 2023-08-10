import React, { Component } from 'react'
import Footer from './Footer'
import FetchData from './Components/FetchButton'
import Header from './Header'


export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <FetchData />
         <Footer />
      </div>
    )
  }
}

export default App