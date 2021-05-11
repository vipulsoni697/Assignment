import "./App.css";
import React from "react";
import { useState } from "react";
import Display from "./components/Display";

function App() {
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(false);
  async function getUser() {
    setFlag(true);
    const item = await fetch("https://reqres.in/api/users?page=1");
    let d = await item.json();
    setData(d.data);
    setFlag(false);
  }
  return (
    <div>
      <div className="nav">
        <h1>Amazing People </h1>
        <button onClick={getUser}>Get Users</button>
      </div>
      {flag === true ? <div className="loader"></div> : <Display data={data} />}
    </div>
  );
}
export default App;
