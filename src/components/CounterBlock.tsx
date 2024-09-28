import React, { useState } from "react";
import Button from "./Button";
import "../styles/components.css";

const CounterBlock: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>Block</div>
      <Button count={count} setCount={setCount} sign="-" />
    </div>
  );
};

export default CounterBlock;
