import React, {useState, useEffect} from 'react';
import client from './Client/client'
import CatImage from './Components/CatImage'
import './App.css';


function App() {

  return (
    <div className="App">
      <CatImage />
    </div>
  );
}

export default App;
