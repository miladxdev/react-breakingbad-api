import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Characters from "./components/Characters";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let url = "https://www.breakingbadapi.com/api/characters";

    axios.get(url).then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  }, []);

  return (
    <div className="App">
      <h1>Hello world</h1>
      <Characters data={data} />
    </div>
  );
}

export default App;
