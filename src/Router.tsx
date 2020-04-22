import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import StorageTest from './components/pages/StorageTest';
import Boat from './components/pages/Boat';
import Boats from './components/pages/Boats';

function AppRouter()   {
  return (
  <Router>
    <Switch>
      <Route path="/" exact>
        <StorageTest />
      </Route>

      <Route path="/boats" exact>
        <Boats />
      </Route>


      <Route path="/boat" exact>
        <Boat />
      </Route>

    </Switch>
  </Router>
  );
}

export default AppRouter;

