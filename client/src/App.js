import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'
import UserPage from './components/UserPage'
import CocktailPage from './components/CocktailPage'
class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <div>
          <Link to='/login'>Login</Link>
        </div>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/user/:userId" component={CocktailPage}/>
        </Switch>
      </div>
    </Router>
    
    );
  }
}

export default App;
