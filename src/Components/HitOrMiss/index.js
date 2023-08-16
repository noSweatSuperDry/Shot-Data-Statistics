import React, { Component } from "react";
import { connect } from "react-redux";
import { PieChart, Pie, Cell, Legend } from "recharts";
import "./style.css";
import "../../index.css";

const COLORS = ["yellowgreen", "red"];

class HitOrMiss extends Component {
  calculateStatistics = () => {
    let totalHits = 0;
    let totalMisses = 0;
    let totalSessions = this.props.shots ? this.props.shots.length : 0;

    if (this.props.shots) {
      this.props.shots.forEach((shot) => {
        shot.shots.forEach((shotDetail) => {
          if (shotDetail.hit) {
            totalHits++;
          } else {
            totalMisses++;
          }
        });
      });
    }

    let totalShots = totalHits + totalMisses;
    let hitPercent = ((totalHits / totalShots) * 100).toFixed(2);

    return { totalSessions, totalShots, totalHits, totalMisses, hitPercent };
  };

  renderStatistics = ({
    totalSessions,
    totalShots,
    totalHits,
    totalMisses,
    hitPercent,
  }) => (
    <div className="splitHalf">
      <div className="side text">
        <p>Total Sessions: {totalSessions}</p>
        <p>Total Shots: {totalShots}</p>
        <p>Total Hits: {totalHits}</p>
        <p>Total Misses: {totalMisses}</p>
        <p>Hit Miss Ratio: {hitPercent}%</p>
      </div>
      <div className="side">
        <PieChart width={300} height={300}>
          <Pie
            data={[
              { name: "Hit", value: totalHits },
              { name: "Miss", value: totalMisses },
            ]}
            cx={150}
            cy={150}
            outerRadius={60} // Adjust the outer radius to make the pie smaller
            fill="#8884d8"
            label
            dataKey="value"
          >
            {[0, 1].map((index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Legend
            verticalAlign="bottom"
            height={30}
            wrapperStyle={{ fontSize: "12px" }}
          />
        </PieChart>
      </div>
    </div>
  );

  render() {
    const statistics = this.calculateStatistics();

    return (
      <div>
        <h2>Hit and Miss Ratio</h2>
        {this.renderStatistics(statistics)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    shots: state.shots.data,
  };
};

export default connect(mapStateToProps)(HitOrMiss);
