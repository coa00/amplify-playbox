/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  priority?: string | null,
  _version?: number | null,
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  priority?: ModelStringInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateTodoInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  priority?: string | null,
  _version?: number | null,
};

export type DeleteTodoInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateTodo2Input = {
  id?: string | null,
  name: string,
  description?: string | null,
  priority?: string | null,
  _version?: number | null,
};

export type ModelTodo2ConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  priority?: ModelStringInput | null,
  and?: Array< ModelTodo2ConditionInput | null > | null,
  or?: Array< ModelTodo2ConditionInput | null > | null,
  not?: ModelTodo2ConditionInput | null,
};

export type UpdateTodo2Input = {
  id: string,
  name?: string | null,
  description?: string | null,
  priority?: string | null,
  _version?: number | null,
};

export type DeleteTodo2Input = {
  id?: string | null,
  _version?: number | null,
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  priority?: ModelStringInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelTodo2FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  priority?: ModelStringInput | null,
  and?: Array< ModelTodo2FilterInput | null > | null,
  or?: Array< ModelTodo2FilterInput | null > | null,
  not?: ModelTodo2FilterInput | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    description: string | null,
    priority: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    description: string | null,
    priority: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    description: string | null,
    priority: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateTodo2MutationVariables = {
  input: CreateTodo2Input,
  condition?: ModelTodo2ConditionInput | null,
};

export type CreateTodo2Mutation = {
  createTodo2:  {
    __typename: "Todo2",
    id: string,
    name: string,
    description: string | null,
    priority: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateTodo2MutationVariables = {
  input: UpdateTodo2Input,
  condition?: ModelTodo2ConditionInput | null,
};

export type UpdateTodo2Mutation = {
  updateTodo2:  {
    __typename: "Todo2",
    id: string,
    name: string,
    description: string | null,
    priority: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteTodo2MutationVariables = {
  input: DeleteTodo2Input,
  condition?: ModelTodo2ConditionInput | null,
};

export type DeleteTodo2Mutation = {
  deleteTodo2:  {
    __typename: "Todo2",
    id: string,
    name: string,
    description: string | null,
    priority: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type SyncTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTodosQuery = {
  syncTodos:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      name: string,
      description: string | null,
      priority: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    description: string | null,
    priority: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      name: string,
      description: string | null,
      priority: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncTodo2sQueryVariables = {
  filter?: ModelTodo2FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTodo2sQuery = {
  syncTodo2s:  {
    __typename: "ModelTodo2Connection",
    items:  Array< {
      __typename: "Todo2",
      id: string,
      name: string,
      description: string | null,
      priority: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetTodo2QueryVariables = {
  id: string,
};

export type GetTodo2Query = {
  getTodo2:  {
    __typename: "Todo2",
    id: string,
    name: string,
    description: string | null,
    priority: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListTodo2sQueryVariables = {
  filter?: ModelTodo2FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodo2sQuery = {
  listTodo2s:  {
    __typename: "ModelTodo2Connection",
    items:  Array< {
      __typename: "Todo2",
      id: string,
      name: string,
      description: string | null,
      priority: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    description: string | null,
    priority: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    description: string | null,
    priority: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    description: string | null,
    priority: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateTodo2Subscription = {
  onCreateTodo2:  {
    __typename: "Todo2",
    id: string,
    name: string,
    description: string | null,
    priority: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateTodo2Subscription = {
  onUpdateTodo2:  {
    __typename: "Todo2",
    id: string,
    name: string,
    description: string | null,
    priority: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteTodo2Subscription = {
  onDeleteTodo2:  {
    __typename: "Todo2",
    id: string,
    name: string,
    description: string | null,
    priority: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};
