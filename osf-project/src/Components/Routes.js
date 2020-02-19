import React from "react";

import { Route, Switch } from "react-router-dom";

// Pages
import Dashboard from "../pages/Dashboard";
import LogIn from "../pages/LogIn";
import Countries from "../pages/Countries/Countries";
import EditCountry from "../pages/Countries/EditCountry";
import EditCity from "../pages/Cities/EditCity";
import SignUp from "../pages/SignUp/SignUp";
import Cities from "../pages/Cities/Cities";
import NewCountry from "../pages/Countries/NewCountry";
import NewCity from "../pages/Cities/NewCity";

import SportTypes from "../pages/SportTypes/SportTypes";
import NewSportType from "../pages/SportTypes/NewSportType";
import EditSportType from "../pages/SportTypes/EditSportType";

import { pathConst } from "../common/constants";

export default () => (
  <Switch>
    <Route exact path={pathConst.HOME} component={Dashboard} />
    <Route path={pathConst.LOGIN} component={LogIn} />
    <Route path={pathConst.COUNTRIES} component={Countries} />
    <Route path={pathConst.CITIES} component={Cities} />
    <Route path={pathConst.EDIT_COUNTRY} component={EditCountry} />
    <Route path={pathConst.EDIT_CITY} component={EditCity} />
    <Route path={pathConst.LOGIN} component={SignUp} />
    <Route path={pathConst.NEW_COUNTRY} component={NewCountry} />
    <Route path={pathConst.NEW_CITY} component={NewCity} />
    <Route path={pathConst.SPORT_TYPES} component={SportTypes} />
    <Route path={pathConst.NEW_SPORT_TYPE} component={NewSportType} />
    <Route path={pathConst.EDIT_SPORT_TYPE} component={EditSportType} />
  </Switch>
);
