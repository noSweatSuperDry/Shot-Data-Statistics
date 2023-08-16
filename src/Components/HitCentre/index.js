import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RadialBarChart } from 'recharts';

class HitInCentre extends Component {
  calculateHits = () => {
    let centerPointHits = 0;
    let centreSideHit = 0;
    let totalHits = 0;

    if (this.props.shots) {
      this.props.shots.forEach((shot) => {
        shot.shots.forEach((shotDetail) => {
          if (shotDetail.hit) {
            totalHits++;

            if (shotDetail.yStart === 1 && shotDetail.yEnd === 1) {
              centerPointHits++;
            } else if (shotDetail.yStart >= 2 && shotDetail.yStart <= 4) {
              centreSideHit++;
            }
          }
        });
      });
    }

    const error = totalHits - centerPointHits - centreSideHit;

    return { centerPointHits, centreSideHit, error };
  };

  render() {
    const { centerPointHits, centreSideHit, error } = this.calculateHits();

    return (
      <div>
        <h2>Hit in Centre Area</h2>
        <p>8th Circle Hits: {centerPointHits}</p>
        <p>7th Circle Hits: {centreSideHit}</p>
        <p>Error: {error}</p>
        <RadialBarChart />
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
