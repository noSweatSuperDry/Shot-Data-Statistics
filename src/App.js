import React, { Component } from 'react'
import Footer from './Footer'
import FetchData from './Components/FetchButton'
import Header from './Header'
import HitOrMiss from './Components/HitOrMiss'
import HitInCentre from './Components/HitCentre'
import { fetchShots } from '../src/redux/slice/dataSlice'
import { connect } from 'react-redux'

export class App extends Component {
 componentDidMount() { 
  this.props.fetchShots()
}

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

const mapDispatchToProps = (dispatch) => {
  return {
    fetchShots: () => dispatch(fetchShots())
  };
};

export default connect(null, mapDispatchToProps)(App);