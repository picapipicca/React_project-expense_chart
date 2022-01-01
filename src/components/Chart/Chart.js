import React from "react";
import "./Chart.css";

import ChartBar from "./ChartBar";

const Chart = (props) => {
  const valueArray = props.dataPlots.map(d => d.value);
  const totalMaximum = Math.max(...valueArray);

  return (
    <div className="chart">
      {props.dataPlots.map((dataPlot) => (
        <ChartBar
          key={dataPlot.label}
          value={dataPlot.value}
          maxValue={totalMaximum}
          label={dataPlot.label}
        />
      ))}
    </div>
  );
};

export default Chart;
