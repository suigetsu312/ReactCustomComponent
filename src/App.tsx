import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Interface } from "readline";
import "./gauge/gauge"
import Gauge from "./gauge/gauge";
interface navigator {
  hid: any;
}
type TickStyle = {
  width: string;
  backgroundColor: string;
};

function App() {
  const [value, setValue] = useState<number>(0); // 共享的 value 状态

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.max(-100, Math.min(100, Number(e.target.value))); // 限制范围在 -100 到 100
    setValue(newValue);
  };


  return (
    <div className="App">
      <div className="Center">
        <Gauge direct="left" value={value} ></Gauge>
        <Gauge direct="right" value={value}></Gauge>
      </div>
      <div >
      <h1>Gauge Control</h1>
      <input
        type="range"
        min={-100}
        max={100}
        value={value}
        onChange={handleInputChange}
      />
      <p>value : {value}</p>
      </div>

    </div>
  );
}

export default App;
