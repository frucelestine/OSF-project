import React from 'react';
import './App.css';
import NavBar from "./Components/Header/NavBar";
import Slider  from './Components/Main/WithCloud/Slider'
import PopularCard from './Components/Main/PopularItems/PopularCard'
import Banner from './Components/Main/Banner/Banner';
import FeaturedProducts from './Components/Main/FeaturedProducts/FeaturedProducts';
import Services from './Components/Main/Services/Services';
import Footer from './Components/Footer/Footer'
import FooterForMobile from './Components/Footer/FooterForMobile'
import MobileIcons from "./Components/Header/MobileIcons";
import Store from "./Redux/Store";
import { Provider } from "react-redux";

import PopularMobile from './Components/Main/PopularItems/PopularMobile'


export default function App() {

  return (
    <div className="App" style={{ maxWidth: 1280 }}>
    <Provider store={Store}>
        <NavBar />
        <Slider />
        <PopularMobile />
        <PopularCard />
        <Banner />
        <FeaturedProducts />
        <Services />
        <Footer />
        <FooterForMobile />
        <MobileIcons />
        </Provider>
      </div>
  );
} 

