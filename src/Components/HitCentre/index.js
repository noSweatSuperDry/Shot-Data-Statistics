import React, { Component } from "react";
import { connect } from "react-redux";
import { RadialBarChart } from "recharts";
import "../../index.css";
import "./style.css";

class HitInCentre extends Component {
  calculateHits = () => {
    let eightCircle = 0;
    let seventhCircle = 0;
    let totalHits = 0;
    let oneToSixthCircle = 0;
    if (this.props.shots) {
      this.props.shots.forEach((shot) => {
        shot.shots.forEach((shotDetail) => {
          if (shotDetail.hit) {
            totalHits++;
            if (shotDetail.yStart === 1 && shotDetail.yEnd === 1) {
              eightCircle++;
            } else if (shotDetail.yStart >= 2 && shotDetail.yStart <= 4) {
              seventhCircle++;
            } else if (shotDetail.yStart <= 8 && shotDetail.yStart >= 6) {
              oneToSixthCircle++;
            }
          } else if (!shotDetail.hit) {
            totalHits++;
            if (shotDetail.yEnd <= 8 && shotDetail.yEnd >= 6) {
              oneToSixthCircle++;
            }
          }
        });
      });
    }

    return { eightCircle, seventhCircle, totalHits, oneToSixthCircle };
  };

  render() {
    const { eightCircle, seventhCircle,  totalHits, oneToSixthCircle } =
      this.calculateHits();

    return (
      <div className="backgroundColor">
        <h2>Shots in Central Area</h2>
        <div className="side text">
          <p>8th Circle : {eightCircle}</p>
          <p>7th Circle : {seventhCircle}</p>
          <p>6th to 1st Circle: {oneToSixthCircle}</p>
          <p>Total shots: {totalHits}</p>
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
