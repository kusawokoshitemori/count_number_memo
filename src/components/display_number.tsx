import React from "react";
import "../styles/components.css";

const DisplayNumber = () => {
  return (
    <div className="display_number">
      <p>表示数 : </p>
      <input type="number" placeholder="ここに数字を入力" />
      <button>決定</button>
    </div>
  );
};

export default DisplayNumber;
