import * as React from 'react';
import './App.css';
import '@aws-amplify/ui/dist/style.css';
import Amplify, { Analytics, Storage, API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator, S3Album } from 'aws-amplify-react';
Amplify.configure(awsconfig);

const listTodos = `query listTodos {
  listTodos{
    items{
      id
      name
      description
    }
  }
}`;

const addTodo = `mutation createTodo($name:String! $description: String!) {
  createTodo(input:{
    name:$name
    description:$description
  }){
    id
    name
    description
  }
}`;


function App() {
  React.useEffect(()=>{
    Analytics.record('Amplify_CLI');
  }, []);

  const [file, setFile] = React.useState(null);

  const todoMutation = async () => {
    const todoDetails = {
      name: 'Party tonight!',
      description: 'Amplify CLI rocks!'
    };
  
    const newTodo = await API.graphql(graphqlOperation(addTodo, todoDetails));
    alert(JSON.stringify(newTodo));
  };
  
  const listQuery = async () => {
    console.log('listing todos');
    const allTodos = await API.graphql(graphqlOperation(listTodos));
    alert(JSON.stringify(allTodos));
  };

  const uploadFile = (evt: React.ChangeEvent<HTMLInputElement>) => {
    console.log("evt:", evt);
    // @ts-ignore
    if (evt.target && evt.target.files && evt.target.files[0]){
      const file = evt.target.files[0];
      const name = file.name;
  
      Storage.put(name, file).then(() => {
        // @ts-ignore
        setFile({ file: name });
      })  
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Amplify PlayBox</h1>
      </header>
      <div className="App">
        <p> Pick a file</p>
        <input type="file" onChange={uploadFile} />
        <button onClick={listQuery}>GraphQL Query</button>
        <button onClick={todoMutation}>GraphQL Mutation</button>
        {/* 
         // @ts-ignore */}
        <S3Album level="private" path="" />
      </div>
    </div>
  );
}

export default withAuthenticator(App, true);
