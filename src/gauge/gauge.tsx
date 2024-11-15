import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./gauge.css";
import { Interface } from "readline";

type TickStyle = {
  width: string;
  backgroundColor: string;
  visibility: string; // 控制是否显示

};

type GaugePropes = {
  direct: string;
  value : number;
};

function Gauge(props: GaugePropes) {
  const ticks = Array.from({ length: 81 }, (_, index) => index);
  let value = props.value
  const totalTicks = 81;
  const centerIndex = Math.floor(totalTicks / 2);

  const getTickStyle = (index: number): React.CSSProperties => {
    const width = `${10 + (90 * (index + 1)) / totalTicks}%`;

    let backgroundColor: string = "transparent";
    if (index === centerIndex) {
      backgroundColor = "black";
    } else if (index < centerIndex) {
      backgroundColor = "green";
    } else if (index > centerIndex) {
      backgroundColor = "red";
    }
    if(index % 2 != 0 && index != centerIndex)
    {
        backgroundColor = "transparent";
    }

    const visibleTicks =
      value > 0
        ? Math.floor((value / 100) * centerIndex)
        : value < 0
        ? Math.floor((Math.abs(value) / 100) * centerIndex)
        : 0;

    const visibility :  "visible" | "hidden" =
      (value > 0 && index <= centerIndex && index > centerIndex - visibleTicks) ||
      (value < 0 && index > centerIndex && index <= centerIndex + visibleTicks) ||
      index === centerIndex
        ? "visible"
        : "hidden";

    return { width, backgroundColor, visibility };
  };

  return (
    <div className={`gauge ${props.direct}`}>
      {Array.from({ length: totalTicks }, (_, index) => (
        <div
          key={index}
          style={getTickStyle(index)}
          className="Tick"
        ></div>
      ))}
    </div>
  );
}

export default Gauge;
