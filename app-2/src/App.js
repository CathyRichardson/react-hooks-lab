import './App.css';
import React, { useState, useEffect } from 'react';
import List from './List';
import axios from 'axios';


function App() {
  const [swapiPeople, setSwapiPeople] = useState([]);

  useEffect(async () => {
    try {
      const { data } = await axios.get(`https://swapi.dev/api/people`);
      let names = data.results.map(element => element.name)  //map to an array of just names
      setSwapiPeople(names)
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <div className="App">
      <List list={swapiPeople} />
    </div>
  );
}

export default App;
