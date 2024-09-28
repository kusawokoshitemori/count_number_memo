import React, { useState, useEffect } from "react";
import CounterBlock from "./components/CounterBlock";
//import "./App.css"; // CSSファイルをインポート

const App: React.FC = () => {
  return (
    <div className="container">
      <CounterBlock />
    </div>
  );
};

export default App;
