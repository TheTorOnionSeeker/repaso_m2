import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import CreateUser from './components/CreateUser';
import Route from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar/>
      {/* <Route path={'/'} component={NavBar}/> */}
      <Route path={'/home'} component={Home}/>
      <Route path={'/users'} component={Users}/>
      <Route path={'/create'} component={CreateUser}/>
      <Route path={'/about'} component={About}/>
    </>
  );
}

export default App;
