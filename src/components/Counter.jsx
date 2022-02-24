import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  //定義した関数の中で変更関数を呼び出し、returnする。
  function countUp() {
    setCounter((prevState) => {
      return prevState + 1;
    });
  }
  function countDown(prevState) {
    setCounter((prevState) => {
      return prevState - 1;
    });
  }
  return (
    <div>
      <button onClick={countUp}>CountUP</button>
      <button onClick={countDown}>CountDown</button>
      <p>現在値：{counter}</p>
    </div>
  );
};

export default Counter;
