import React from 'react';
import { Landing } from './features/landing/Landing';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
        <Router>
          <Switch>
            <Route path="/">
              <Landing />
            </Route>
          </Switch>
        </Router>
  );
}

export default App;
