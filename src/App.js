import { useState, useRef } from "react";
import { marked } from "marked";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [input, setInput] = useState("# hello");
  const markdownFileInput = useRef();
  
  //const obj = { __html: marked('# hello') };
  const clickMarkdownFileInput = () => {
    markdownFileInput.current.click();
  };

  const readMarkdownFile = (e) => {
    const mdFile = e.target.files[0];
    
    if(mdFile?.name.includes(".md"))
    {
      const reader = new FileReader();
      reader.onload = (response) => {
        setInput(response.target.result);
        response.target.value = '';
      };

      reader.onerror = (error) => console.log(error);
      reader.readAsText(mdFile);
    }
    markdownFileInput.value =  "";
  }

  return (
    <div>
      <nav className="navigation">
        <img className="logo" src={logo} />
      </nav>

      <div className="container">
        <div className="input-container">
          <input type="file" hidden accept=".md"
          ref={markdownFileInput}
          onChange={(e) => readMarkdownFile(e)}></input>

          <button className="uploadMarkdown" 
          onClick={clickMarkdownFileInput}>
            Load markdown
          </button>

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
