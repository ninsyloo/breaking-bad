import React from 'react';
import './App.css';
import axios from 'axios'
import {useState, useEffect} from 'react';
import Search from '../components/ui/search'
import Header from '../components/ui/header'
import CharacterGrid from '../components/characters/charactergrid';

//Este es el componente principal de nuestra app

const App = () => {
  const [items, setItems] = useState([]);//this starts as an empty array but once we make the request with the useEffect,
  //it's going to start filling  up with the data from the api
  //items -> is gonna represent the items that come in from the api.
  //setItems -> is gonna be the function we use to change the state
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState(true);

useEffect(() => {
const fetchItems = async () => {
  const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);
  console.log(result.data)
  setItems(result.data);
  setIsLoading(false)
}
  fetchItems();
}, [query])


  return (
    <div className="container">
     <Header/>
     <Search getQuery = {q => setQuery(q)}/>
     <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
