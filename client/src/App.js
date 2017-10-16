import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'
import UserPage from './components/UserPage'
import CocktailPage from './components/CocktailPage'
import NavBar from "./components/NavBar"
import ExperimentalHomePage from "./components/ExperimentalHomePage"
class App extends Component {
  render() {
    return ( 
    <MuiThemeProvider>
      <Router>
          <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={ExperimentalHomePage}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/user/:userId" component={CocktailPage}/>
          </Switch>
          </div>
      </Router>
    </MuiThemeProvider>
    );
  }
}

export default App;
