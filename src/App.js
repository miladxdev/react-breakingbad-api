import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let url = "https://www.breakingbadapi.com/api/characters?limit=12";

    axios.get(url).then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Cards data={data} />
      <Footer />
    </div>
  );
}

export default App;
