import React, { Component } from 'react'
import { Connect } from 'react-redux'

class HitOrMiss extends React.Component {
  render() {
    console.log(this.props.shots);
    return (
      <h2>Hit and Miss Ratio</h2>
    )
  }
}
const mapStateToProps = (state) => {    
    return {
        shots: state.shots.data
    }
}

export default HitOrMiss