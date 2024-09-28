import React, { useState } from "react";
import Button from "./Button";
import "../styles/components.css";

const CounterBlock: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="CounterBlock">
      <Button count={count} setCount={setCount} sign="-" />
      <div className="testmemo_numbermemo">
        <textarea rows={1} cols={20} placeholder="ここにメモ" />
        <p>{count}</p>
      </div>

      <Button count={count} setCount={setCount} sign="+" />
    </div>
  );
};

export default CounterBlock;
