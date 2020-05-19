import * as React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

import StorageTest from './components/pages/StorageTest';
import Boat from './components/pages/Boat';
import Boats from './components/pages/Boats';

function AppRouter()   {
  return (
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
   );
}

export default AppRouter;

