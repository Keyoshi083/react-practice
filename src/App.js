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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <Article title={"題名です"} content={"内容です"} /> */}
        <Article
          title={"コンポーネントの再利用"}
          content={"ちゃんと再利用できているか"}
          number={10}
          obj={obj}
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
