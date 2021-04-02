import React from 'react';
import axios from 'axios';
import './App.css';
import Feeling from '../Feeling/Feeling'
function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <body>
        <Feeling />
      </body>
    </div>
  );
}

export default App;
