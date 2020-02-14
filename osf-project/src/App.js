import React from 'react';
import './App.css';
import NavBar from './Components/Header/NavBar'
import Slider  from './Components/Main/WithCloud/Slider'
import DropMenu from './Components/Header/DropMenu'
import MenuList from './Components/Header/MenuList'
import PopularCard from './Components/Main/PopularItems/PopularCard'
import Banner from './Components/Main/Banner/Banner';
import FeaturedProducts from './Components/Main/FeaturedProducts/FeaturedProducts';


function App() {
  return (
    <div className="App" style={{maxWidth: 1280}}>
      <NavBar />
      <Slider />
      <PopularCard />
      <Banner />
      <FeaturedProducts/>
    </div>
  );
} 

export default App;
