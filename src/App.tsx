import React from 'react';
import  Landing  from './features/landing/Landing';
import NewAccount from './features/new-account/NewAccount'
import Disqualified from './features/disqualification/Disqualification'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
        <Router>
          <Switch>
            <Route path="/new-account">
              <NewAccount />
            </Route>
            <Route path="/disqualified">
              <Disqualified />
            </Route>
            <Route path="/">
              <Landing />
            </Route>
            
          </Switch>
        </Router>
  );
}

export default App;
