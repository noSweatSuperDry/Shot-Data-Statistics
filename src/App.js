import React, { Component } from 'react'
import Footer from './Footer'
import Data from './Data'
import Header from './Header'


export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Data />
        <Footer />
      </div>
    )
  }
}

export default App