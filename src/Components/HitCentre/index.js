import React, { Component } from 'react'
import { connect } from "react-redux";
import {RadialBarChart} from  'recharts'



 class HitInCentre extends Component {
  render() {
    let centerPointHits = 0;
    if (this.props.shots) {
        this.props.shots.forEach(shot => {
          shot.shots.forEach(shotDetail => {
           
              if ((shotDetail.yStart === 1 && shotDetail.yEnd === 1 )&& shotDetail.hit ) {
                centerPointHits++; // Increment centerHits if yStart and yEnd are both 1
           
        }})
      })}
      
      let centreSideHit = 0;
      if (this.props.shots) {
        this.props.shots.forEach(shot => {
          shot.shots.forEach(shotDetail => {
           
              if ((shotDetail.yStart === 2  || shotDetail.yStart === 3 || shotDetail.yStart === 4 )&& shotDetail.hit) {
                centreSideHit++; // Increment centerHits if yStart and yEnd are both 1
           
        }})
      })}

      let totalHits = 0;
      if (this.props.shots) {
        this.props.shots.forEach((shot) => {
          shot.shots.forEach((shotDetail) => {
            if (shotDetail.hit) {
              totalHits++;
            }})})}
    
    return (
        <div>
      <h2>Hit in Centre Area</h2>
      <p>8th Circle Hits: {centerPointHits}</p>
      <p>7th Circle Hits: {centreSideHit}</p>
      <p>Error: {totalHits - centerPointHits - centreSideHit}</p>
        <RadialBarChart/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
    return {
      shots: state.shots.data,
    };
  };
  export default connect(mapStateToProps)(HitInCentre);