import { useState } from "react";

const TextBox = () => {
  const [text, setText] = useState("");

  function inputText(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(event) => {
          inputText(event);
        }}
      />
      <p>{text}</p>
    </div>
  );
};

export default TextBox;
