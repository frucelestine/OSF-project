import React from 'react'
import NavBar from "../../Components/Header/NavBar";
import Slider from "../../Components/Main/WithCloud/Slider";
import PopularCard from "../../Components/Main/PopularItems/PopularCard";
import Banner from "../../Components/Main/Banner/Banner";
import FeaturedProducts from "../../Components/Main/FeaturedProducts/FeaturedProducts";
import Services from "../../Components/Main/Services/Services";
import FooterForMobile from '../../Components/Footer/FooterForMobile';
import MobileIcons from '../../Components/Header/MobileIcons';
import LoginForm from '../../Components/Login/LoginForm';
import Footer from "../../Components/Footer/Footer";


export default function HomePage() {
    return (
      <div>
        <NavBar />
        <LoginForm />
        <Slider />
        <PopularCard />
        <Banner />
        <FeaturedProducts />
        <Services />
        <Footer />
        <FooterForMobile />
        <MobileIcons />
      </div>
    );
}
