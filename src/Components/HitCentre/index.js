import React, { Component } from "react";
import { connect } from "react-redux";
import { RadialBarChart } from "recharts";
import "../../index.css";
import "./style.css";

class HitInCentre extends Component {
  calculateHits = () => {
    let eightCircle = 0;
    let seventhCircle = 0;
    
    let oneToSixthCircle = 0;
    if (this.props.shots) {
      this.props.shots.forEach((shot) => {
        shot.shots.forEach((shotDetail) => {
          if (shotDetail.hit) {
            if (shotDetail.yStart === 1 && shotDetail.yEnd === 1) {
              eightCircle++;
            } else if (shotDetail.yStart >= 2 && shotDetail.yStart <= 5) {
              seventhCircle++;
            } else if (shotDetail.yStart > 2 && shotDetail.yStart <= 8) {
              oneToSixthCircle++;
            }
          } else if (!shotDetail.hit) {
            if (shotDetail.yStart > 2 && shotDetail.yStart <= 8) {
              oneToSixthCircle++;
            }
          }
        });
      });
    }


console.log(eightCircle, seventhCircle,  oneToSixthCircle);
    return { eightCircle, seventhCircle,  oneToSixthCircle };
  };

  render() {
    const { eightCircle, seventhCircle,  oneToSixthCircle } =
      this.calculateHits();

    return (
      <div className="backgroundColor">
        <h2>Shots in Central Area</h2>
        <div className="side text">
          <p>8th Circle : {eightCircle}</p>
          <p>7th Circle : {seventhCircle}</p>
          <p>6th to 1st Circle: {oneToSixthCircle}</p>
          </div>
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