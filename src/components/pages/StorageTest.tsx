import * as React from 'react';
import { Auth, Analytics, Storage, API, graphqlOperation } from 'aws-amplify';
import { S3Album } from 'aws-amplify-react';

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

function StorageTest() {
  React.useEffect(()=>{
    async function getIdentityId(){
      const currentCredentials = await Auth.currentCredentials();
      setIdentityId(currentCredentials.identityId);    
    }
    getIdentityId();
    Analytics.record('Amplify_CLI');
  }, []);

  const [file, setFile] = React.useState(null);
  const [identityId, setIdentityId] = React.useState("");

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
  const level = "private"; 
  const path = "/";

  return (
    <div>
        <p> Pick a file</p>
        <input type="file" onChange={uploadFile} />
        <button onClick={listQuery}>GraphQL Query</button>
        <button onClick={todoMutation}>GraphQL Mutation</button>
 
        {identityId &&
          <S3Album level={level} path={path} identityId={identityId} picker/> 
        }      
    </div>
  );
}

export default StorageTest;