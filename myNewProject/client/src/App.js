import React from 'react';
import {Router} from '@reach/router';
import Header from './views/Header'
import Map from './views/Map'
import Main from './views/Main';
import Detail from './views/Detail';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Router>
        <Map path='map/'/>
        <Main path='people/'/>
        <Detail path='people/:id'/>
      </Router>
    </div>
  );
}

export default App;
