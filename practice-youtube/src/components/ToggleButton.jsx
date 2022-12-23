import { useState, useEffect } from "react";

const ToggleButton = () => {
  const [open, setOpen] = useState(false);

  function toggle() {
    setOpen((prevState) => !prevState);
  }

  //useEffect学習
  //useEffect内で関数をreturnすればクリーンアップ処理が走る
  // クリーンアップ処理は再レンダリングされる前に処理される（初回レンダリング含む）
  useEffect(() => {
    if (open) {
      console.log("Connection open");
    }
    return () => {
      console.log("Clean UP effect");
    };
  }, [open]);
  return (
    <div>
      <button onClick={toggle}>{open ? "OPEN" : "CLOSE"}</button>
    </div>
  );
};

export default ToggleButton;
