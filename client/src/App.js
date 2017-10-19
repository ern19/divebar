import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SingleCocktailUpdate from "./components/SingleCocktailUpdate"
import LoginPage from './components/LoginPage'
import CocktailPage from './components/CocktailPage'
import NavBar from "./components/NavBar"
import ExperimentalHomePage from "./components/ExperimentalHomePage"
import SingleCocktail from "./components/SingleCocktail"

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
            <Route path="/user/:userId/submitted/:submissionId/update" component={SingleCocktailUpdate}/>
            <Route path="/user/:userId/submitted/:submissionId" component={SingleCocktail}/>
            <Route path="/user/:userId" component={CocktailPage}/>
           
          </Switch>
          </div>
      </Router>
    </MuiThemeProvider>
    );
  }
}

export default App;
