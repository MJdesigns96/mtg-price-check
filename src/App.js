import CardCard from "./components/card";
import Header from "./components/header";
import styles from './App.css'
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
        fetch(`https://api.scryfall.com/cards/named?fuzzy=${search}`)
        .then(response => response.json())
        .then(data => console.log(data))
      }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e)
    setSearch(e.target[0].value);
  }

  let temp = '';

  return(
    <>
      <div className="header">
        <Header />
      </div>
      <div>
          <form onSubmit={handleSubmit}>
            <input
              type = "text"
              name = "card"
              placeholder = "Enter Card Name"
              onChange = {e => temp = e.target.value}
            />
            <button type="submit">Search</button>
          </form>
      </div>
      <div className="card-container">
        <CardCard />
      </div>
    </>    
  );
}

export default App;
