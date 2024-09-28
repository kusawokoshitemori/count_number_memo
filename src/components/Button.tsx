import React from "react";
import "../styles/components.css";

interface CounterProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  sign: string;
}

const Button: React.FC<CounterProps> = ({ count, setCount, sign }) => {
  const handleClick = () => {
    if (sign === "+") {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <button
      className={
        sign === "+"
          ? "Button_component Button_plus"
          : "Button_component Button_minus"
      }
      onClick={handleClick}
    >
      {sign === "+" ? "増やす" : "減らす"}
    </button>
  );
};

export default Button;
