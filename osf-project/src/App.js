import React from "react";
import "./App.css";
import HomePage from './Components/Pages/HomePage';

import FooterForMobile from "./Components/Footer/FooterForMobile";
import MobileIcons from "./Components/Header/MobileIcons";
import LoginForm from "./Components/Login/LoginForm";
import ProductDetailPage from './Components/Pages/ProductDetailPage'
import Store from "./Redux/Store";
import ProductDetail from "./Components/Main/ProductDetail/ProductDetail";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PopularMobile from "./Components/Main/PopularItems/PopularMobile";

export default function App() {
  return (
    <Router>
      <div className="App" style={{ maxWidth: 1280 }}>
        <Provider store={Store}>
          <Switch>
            <Route exact path={'/'} component={HomePage}/>
            <Route path={'/product-detail'} component={ProductDetailPage} />
          </Switch>
        </Provider>
      </div>
    </Router>
  );
}
