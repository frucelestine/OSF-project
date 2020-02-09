import React from 'react';
import './App.css';
import NavBar from './Components/Header/NavBar'
import DropMenu from './Components/Header/DropMenu'
import MenuList from './Components/Header/MenuList'


function App() {
  return (
    <div className="App" style={{maxWidth: 1280}}>
      <NavBar />
    </div>
  );
} 

export default App;
