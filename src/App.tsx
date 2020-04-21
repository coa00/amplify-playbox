import * as React from 'react';
import './App.css';
import '@aws-amplify/ui/dist/style.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
import MainLayout from './components/layouts/Main';
import Router from './Router';

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Router />        
      </MainLayout>
    </div>
  );
}

export default withAuthenticator(App, true);
