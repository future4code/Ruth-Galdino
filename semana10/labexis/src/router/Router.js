import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Contato from "../components/Contato";
import Login from "../components/Login";
import CriarViagem from "../components/CriarViagem";


function Router() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/Home">
            <Home/>
          </Route>
          <Route exact path="/Contato">
            <Contato/>
          </Route>
          <Route exact path="/Login">
            <Login/>
          </Route>
          <Route exact path="/CriarViagem">
            <CriarViagem/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
  
  export default Router;