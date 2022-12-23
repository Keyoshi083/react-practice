import "./App.css";
import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./components/ChildArea";

function App() {
  // Stateの値が変わるたびに再レンダリングされる
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const countUp = () => {
    setCount(count + 1);
  };
  const changeText = (e) => {
    setText(e.target.value);
  };
  const switchOpen = () => {
    setIsOpen(!isOpen);
  };

  //関数のmemo化
  const close = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  //　変数のメモ化
  const temp = useMemo(() => 1 + 3, []);
  return (
    <div className="App">
      <main>
        <p>{count}</p>
        <button onClick={countUp}>Count Up!</button>
        <br />
        <input value={text} onChange={changeText} />
        <br />
        <button onClick={switchOpen}>表示</button>
        <ChildArea open={isOpen} close={close} />
      </main>
    </div>
  );
}

export default App;
