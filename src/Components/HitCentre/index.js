import React, { Component } from "react";
import { connect } from "react-redux";
import { RadialBarChart } from "recharts";
import "../../index.css";
import "./style.css";

class HitInCentre extends Component {
  calculateHits = () => {
    const initialState = {
      eightCircle: 0,
      seventhCircle: 0,
      oneToSixthCircle: 0,
    };
  
    const { shots } = this.props;
  
    if (shots) {
      return shots.reduce((hits, heat) => {
        heat.shots.forEach((shotDetail) => {
          if (shotDetail.hit) {
            console.log(shotDetail);
            if (shotDetail.yStart === 1 && shotDetail.yEnd === 1) {
              hits.eightCircle++;
            } else if (shotDetail.yEnd >= 2 && shotDetail.yEnd <= 4) {
              hits.seventhCircle++;
            } else if (shotDetail.xEnd >= 2 && shotDetail.xEnd <= 4) {
              hits.seventhCircle++;
            } else if (
              (shotDetail.yEnd >= 6 && shotDetail.yEnd <= 8) ||
              (shotDetail.xEnd >= 6 && shotDetail.xEnd <= 8)
            ) {
              hits.oneToSixthCircle++;
            }
          } else {
            if (
              (shotDetail.xEnd >= 6 && shotDetail.xEnd <= 8) ||
              (shotDetail.yEnd >= 6 && shotDetail.yEnd <= 8)
            ) {
              hits.oneToSixthCircle++;
            }
          }
        });
        return hits;
      }, initialState);
    }
  
    return initialState;
  };
  

  renderHits = ({ eightCircle, seventhCircle, oneToSixthCircle }) => (
    <div className="side text">
      <p>8th Circle : {eightCircle}</p>
      <p>7th Circle : {seventhCircle}</p>
      <p>6th to 1st Circle: {oneToSixthCircle}</p>
    </div>
  );

  render() {
    const hits = this.calculateHits();

    return (
      <div className="backgroundColor">
        <h2>Shots in Central Area</h2>
        {this.renderHits(hits)}
        <div className="side">
          <RadialBarChart />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    shots: state.shots.data,
  };
};

export default connect(mapStateToProps)(HitInCentre);
