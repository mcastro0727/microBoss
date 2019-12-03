import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
//import Form from './components/Form'

import Home from './pages/Home'
import Profile from './pages/Profile'



function App() {
  
  return (

    // ADD ROUTE TO user/login
      <Router>
        <div>

          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/profile' component={Profile} />
            
          </Switch>
        </div>
      </Router>
    );
  
}

export default App;
