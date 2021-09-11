import './App.css';
import React, { useState } from 'react';
import List from './Components/List';
import AddToDo from './Components/AddToDo';


function App() {
  const [toDos, setToDos] = useState(['wake up', 'eat']);

  function updateToDo(toDo) {
    setToDos([...toDos, toDo])
  }

  return (
    <div className="App">
      <AddToDo updateToDo={updateToDo} />
      <List list={toDos} />
    </div>
  );
}

export default App;
