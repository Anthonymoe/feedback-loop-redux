import React from 'react';
import {HashRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Complete from '../Complete/Complete';



function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <body>
        <Router>
          <Route path="/" exact>
            <Feeling />
          </Route>
          <Route path="/understanding" exact>
              <Understanding />
          </Route>
          <Route path="/supported" exact>
              <Supported />
          </Route>
          <Route path="/comments" exact>
              <Comments />
          </Route>
          <Route path="/review">
              <Review />
          </Route>
          <Route path="/complete">
              <Complete />
          </Route>
        </Router>
      </body>
    </div>
  );
}

export default App;
