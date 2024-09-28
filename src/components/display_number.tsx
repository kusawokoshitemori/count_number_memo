import React, { useState } from "react"; // useStateをインポート
import "../styles/components.css";

interface DisplayNumberProps {
  blockNumber: number; // 数字の型
  setBlockNumber: React.Dispatch<React.SetStateAction<number>>; // setBlockNumber関数の型
}

const DisplayNumber: React.FC<DisplayNumberProps> = ({
  blockNumber,
  setBlockNumber,
}) => {
  const [inputValue, setInputValue] = useState<number | "">(""); // inputの値を管理する状態

  const DisplayClick = () => {
    if (typeof inputValue === "number") {
      // inputValueが数値かどうかをチェック
      setBlockNumber(inputValue); // 数値ならsetBlockNumberを呼び出す
    } else {
      console.log("入力された値は数値ではありません。"); // 数値でない場合の処理
    }
  };

  return (
    <div className="display_number">
      <p>表示数 : {blockNumber}</p>
      <input
        type="number"
        placeholder="ここに数字を入力"
        className="number-input"
        value={inputValue} // inputの値をstateにバインド
        onChange={(e) => setInputValue(Number(e.target.value) || "")} // 入力変更時にstateを更新
      />
      <button onClick={DisplayClick}>決定</button>
    </div>
  );
};

export default DisplayNumber;
