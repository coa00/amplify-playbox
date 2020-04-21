import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import StorageTest from './components/pages/StorageTest';

function AppRouter()   {
  return (
  <Router>
    <Switch>
      <Route path="/">
        <StorageTest />
      </Route>
    </Switch>
  </Router>
  );
}

export default AppRouter;

