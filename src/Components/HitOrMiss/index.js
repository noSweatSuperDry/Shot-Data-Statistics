import React, { Component } from "react";
import { connect } from "react-redux";
import { PieChart, Pie, Cell, Legend } from "recharts";
import "./style.css";
import "../../index.css"

class HitOrMiss extends Component {
  render() {
    let totalHits = 0;
    let totalMisses = 0;
    let totalSessions = 0;
    totalSessions = this.props.shots ? this.props.shots.length : 0;
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
    let hitPercent = 0;
    hitPercent = ((totalHits / (totalHits + totalMisses)) * 100).toFixed(2);

    const pieChartData = [
      { name: "Hit", value: totalHits },
      { name: "Miss", value: totalMisses },
    ];

    const COLORS = ["#0088FE", "#FF8042"];

    return (
      <div>
        <h2>Hit and Miss Ratio</h2>
        
          <div className="splitHalf">
            <div className="side text">
              <p>Total Sessions: {totalSessions}</p>
              <p>Total Hits: {totalHits}</p>
              <p>Total Misses: {totalMisses}</p>
              <p>Hit Miss Ratio: {hitPercent}%</p>
            </div>
            <div className="side">
              <PieChart width={300} height={300}>
                <Pie
                  data={pieChartData}
                  cx={150}
                  cy={150}
                  outerRadius={60} // Adjust the outer radius to make the pie smaller
                  fill="#8884d8"
                  label
                >
                  {pieChartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Legend
                  verticalAlign="bottom"
                  height={30}
                  wrapperStyle={{ fontSize: "12px" }}
                />{" "}
                {/* Decrease font size */}
              </PieChart>
            </div>
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

export default connect(mapStateToProps)(HitOrMiss);
