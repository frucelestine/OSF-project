import React from 'react';
import NavBar from '../../Components/Header/NavBar';
import NotFound from '../../Components/NotFound/NotFound';
import Footer from '../../Components/Footer/Footer';
import LoginForm from '../../Components/Login/LoginForm'
import FooterForMobile from '../../Components/Footer/FooterForMobile';
import Services from '../../Components/Services/Services'

export default function NotFoundPage() {
    return (
      <div>
        <NavBar />
        <LoginForm />
        <Services />
        <NotFound />
        <Footer />
        <FooterForMobile />
      </div>
    );
}
