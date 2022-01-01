import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';


const App = () => {
  const [items, setItems] = useState([]);
  //const [items2, setItems2] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItem = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      //const result2 = await axios(`https://www.breakingbadapi.com/api/quotes?name=${query}`)
      //console.log(result2.data);
      setItems(result.data)
      //setItems2(result2.data)
      setIsLoading(false)
    }

    fetchItem();
  }, [query])

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} /*items2={items2}*//>
    </div>
  );
}

export default App;
