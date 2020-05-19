import React from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import MaterialTable from "material-table";
const listTodos = `query listTodos {
  listTodos{
    items{
      id
      name
      description
    }
  }
}`;

function Boats() {
  return (
    <MaterialTable
    title="Remote Data Preview"
    columns={[
      {
        title: 'Avatar',
        field: 'avatar',
        render: rowData => (
          <img
            alt="test"
            style={{ height: 36, borderRadius: '50%' }}
            src={rowData.avatar}
          />
        ),
      },
      { title: 'Id', field: 'id' },
      { title: 'name', field: 'name' }
    ]}
    data={query =>
      new Promise((resolve, reject) => {
        // @ts-ignore
        API.graphql(graphqlOperation(listTodos)).then(res=>{
          console.log(res);
          const { items } = res.data.listTodos;
          resolve({
            data: items,
            page: 0,
            totalCount: items.length,
          })
        });
      })
    }
  />
  );
}

export default Boats;