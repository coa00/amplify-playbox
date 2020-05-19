import * as React from 'react';
import './App.css';
import '@aws-amplify/ui/dist/style.css';
import { BrowserRouter as Router } from "react-router-dom";

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
import MainLayout from './components/layouts/MainLayout';
import AppRouter from './Router';

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <Router>
        <MainLayout>
          <AppRouter />
          </MainLayout>
      </Router>
    </div>
  );
}

export default withAuthenticator(App, true);
