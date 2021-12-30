import React from "react";
import "./Chart.css";

import ChartBar from "./ChartBar";

const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPlots.map((dataPlot) => (
        <ChartBar
          key={dataPlot.label}
          value={dataPlot.value}
          maxValue={null}
          label={dataPlot.label}
        />
      ))}
    </div>
  );
};

export default Chart;
