import React, { Component } from 'react';
import { connect } from 'react-redux';

class HitOrMiss extends Component {
  render() {
    let totalHits = 0;
    let totalMisses = 0;
    let totalSessions = 0;
    totalSessions = this.props.shots ? this.props.shots.length : 0;
    if (this.props.shots) {
      this.props.shots.forEach(shot => {
        shot.shots.forEach(shotDetail => {
          if (shotDetail.hit) {
            totalHits++;
          } else {
            totalMisses++;
          }
        });
      });
    }

    return (
      <div> 
        {this.props.shots == null ? (
          <div>
            <h1>No data</h1>
          </div>
        ) : (
          <div>
            <h2>Hit and Miss Ratio</h2>
            <p>Total Sessions: {totalSessions}</p>
            <p>Total Hits: {totalHits}</p>
            <p>Total Misses: {totalMisses}</p>
            <p>Hit Miss Ratio: {(totalHits / (totalHits + totalMisses) * 100).toFixed(2)}%</p>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {    
  return {
    shots: state.shots.data
  };
};

export default connect(mapStateToProps)(HitOrMiss);
