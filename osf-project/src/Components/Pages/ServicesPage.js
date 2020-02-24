import React, { Component } from 'react'
import Services from '../../Components/Services/Services';
import NavBar from '../../Components/Header/NavBar';
import FeaturedProducts from '../../Components/Main/FeaturedProducts/FeaturedProducts'
import Footer from '../../Components/Footer/Footer'
import LoginForm from '../Login/LoginForm'
import FooterForMobile from '../Footer/FooterForMobile'

export class ServicesPage extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <LoginForm />
                <Services />
                <FeaturedProducts />
                <Footer />
                <FooterForMobile />
                
            </div>
        )
    }
}

export default ServicesPage
