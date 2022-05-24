import { useState } from "react";
import { marked } from "marked";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [input, setInput] = useState("# hello");
  //const obj = { __html: marked('# hello') };
  return (
    <div>
      <nav className="navigation">
        <img className="logo" src={logo} />
      </nav>

      <div className="container">

        <div className='input-container'>
          <textarea
            className="input"
            rows="10"
            cols="80"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </div>

        <div
          className="viewer"
          dangerouslySetInnerHTML={{ __html: marked(input) }}
        ></div>
      </div>
    </div>
  );
}

export default App;
