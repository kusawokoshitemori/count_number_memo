import React, { useState, useEffect } from "react";
import Unity3D from "./components/Unity3D";
//import "./App.css"; // CSSファイルをインポート

const App: React.FC = () => {
  return (
    <div className="container">
      <div>
        <Unity3D />
      </div>
      <div></div>
    </div>
  );
};

export default App;
