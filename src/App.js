import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    let url = `https://www.breakingbadapi.com/api/characters?limit=16&name=${query}`;

    axios.get(url).then((response) => {
      setData(response.data);
    });
  }, [query]);

  return (
    <div className="App">
      <Header getQuery={(q) => setQuery(q)} />
      <Cards data={data} />
      <Footer />
    </div>
  );
}

export default App;
