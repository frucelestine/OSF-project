import React from 'react';
import './App.css';
import NavBar from './Components/Header/NavBar'
import Slider  from './Components/Main/WithCloud/Slider'
import DropMenu from './Components/Header/DropMenu'
import MenuList from './Components/Header/MenuList'
import PopularCard from './Components/Main/PopularItems/PopularCard'


function App() {
  return (
    <div className="App" style={{maxWidth: 1280}}>
      <NavBar />
      <Slider />
      <PopularCard/>
    </div>
  );
} 

export default App;
