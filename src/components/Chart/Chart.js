import React from "react";
import "./Chart.css";

import ChartBar from "./ChartBar";

const Chart = (props) => {
  //dataPlots에 있는 value만 필요한데 지금 전체가 object 로 들어있다. map 써서 새로운 배열에는 object가 아닌 value값만 number로 가지고온다. 
  const valueArray = props.dataPlots.map(d=> d.value);
  //max method에는 12 arguments 있는데 (배열에서는 12 values였던 ) pulled out by spread operator 
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
