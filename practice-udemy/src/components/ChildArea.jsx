import { memo } from "react";
const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki",
};
export const ChildArea = memo((props) => {
  const { open, close } = props;
  console.log("ChildAreaがレンダリング");
  const data = [...Array(2000).keys()];
  data.forEach((value) => console.log(value));
  console.log(data);
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={close}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
