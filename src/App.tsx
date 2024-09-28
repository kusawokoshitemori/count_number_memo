import React, { useState, useEffect } from "react";
import CounterBlock from "./components/CounterBlock";
//import "./App.css"; // CSSファイルをインポート

const App: React.FC = () => {
  return (
    <div className="container">
      <div>
        <h1>CounterMemo</h1>
        <p>タイトルとカウンターが使えるよ</p>
      </div>
      <CounterBlock />
    </div>
  );
};

export default App;
