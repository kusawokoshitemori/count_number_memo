import React, { useState, useEffect } from "react";
import CounterBlock from "./components/CounterBlock";
import DisplayNumber from "./components/display_number";
import "./styles/App.css";

const App: React.FC = () => {
  const [blockNumber, setBlockNumber] = useState(3);
  return (
    <div className="App_container">
      <div className="App_sentence_container">
        <h1>CounterMemo(カウンターメモ)</h1>
        <p>カウンターとメモが使えるよ</p>
        <DisplayNumber
          blockNumber={blockNumber}
          setBlockNumber={setBlockNumber}
        />
      </div>
      <div>
        {Array.from({ length: blockNumber }, (_, index) => (
          <CounterBlock key={index} />
        ))}
      </div>
    </div>
  );
};

export default App;
