import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Route from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar/>
      // <Route path={'/'} component={'NavBar'}/>
      <Route path={'/home'} component={'Home'}/>
    </>
  );
}

export default App;
