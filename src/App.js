import logo from "./logo.svg";
import "./App.css";
import Article from "./components/Article.jsx";

function App() {
  const obj = {
    data1: "データ1ですよ",
    data2: "データ2ですよ",
  };
  return (
    <div className="App">
      {/* <Article title={"題名です"} content={"内容です"} /> */}
      <Article
        title={"コンポーネントの再利用"}
        content={"ちゃんと再利用できているか"}
        number={10}
        obj={obj}
        img={logo}
      />
    </div>
  );
}

export default App;
