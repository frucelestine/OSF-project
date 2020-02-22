import React from 'react'
import NavBar from "../../Components/Header/NavBar";
import Services from "../../Components/Main/Services/Services";
import LoginForm from "../../Components/Login/LoginForm";
import Footer from "../../Components/Footer/Footer";
import FooterForMobile from "../../Components/Footer/FooterForMobile";
import MobileIcons from "../../Components/Header/MobileIcons";
import ProductDetail from '../../Components/Main/ProductDetail/ProductDetail';
import FeaturedProducts from "../../Components/Main/FeaturedProducts/FeaturedProducts";

export default function ProductDetailPage() {
    return (
      <div>
        <NavBar />
        <LoginForm />
        <ProductDetail />
        <FeaturedProducts />
        <Services />
        <Footer />
        <FooterForMobile />
        <MobileIcons />
      </div>
    );
}
