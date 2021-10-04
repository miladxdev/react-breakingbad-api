import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Pagination from "./components/Pagination";

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let url = `https://www.breakingbadapi.com/api/characters?limit=12&offset=${offset}&name=${query}`;

    setIsLoading(false);

    axios.get(url).then((response) => {
      setData(response.data);
      setIsLoading(true);
    });
  }, [query, offset]);

  return (
    <div className="App">
      <Header getQuery={(q) => setQuery(q)} getOffset={(o) => setOffset(o)} />
      <Cards data={data} isLoading={isLoading} />
      <Pagination getOffset={(o) => setOffset(o)} offset={offset} />
      <Footer />
    </div>
  );
}

export default App;
