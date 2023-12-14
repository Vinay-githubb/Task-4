import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./Style.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="logo-link">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="header">TASK-4</h1>
      <div className="card">
        <p>My name is Vinay and I have nothing to say.</p>
      </div>
      <p className="paragraph">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
