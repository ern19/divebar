import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'
import CocktailPage from './components/CocktailPage'
import NavBar from "./components/NavBar"
import ExperimentalHomePage from "./components/ExperimentalHomePage"
import "./App.css"
class App extends Component {
  render() {
    const style = {
      background: "http://irishpubcompany.com/wp-content/uploads/2015/12/Capture1.jpg"
    
    };
    return ( 
    <MuiThemeProvider>
      <Router>
          <div style={style}>
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
