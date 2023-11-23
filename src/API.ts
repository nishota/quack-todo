/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name?: string | null,
  email: string,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
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

export type User = {
  __typename: "User",
  id: string,
  name?: string | null,
  email: string,
  ToDos?: ModelToDoConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelToDoConnection = {
  __typename: "ModelToDoConnection",
  items:  Array<ToDo | null >,
  nextToken?: string | null,
};

export type ToDo = {
  __typename: "ToDo",
  id: string,
  description?: string | null,
  status?: ToDoStatus | null,
  startedAt?: string | null,
  finishedAt?: string | null,
  updatedAt: string,
  cratedAt: string,
  userID: string,
  createdAt: string,
};

export enum ToDoStatus {
  BEFORE_START = "BEFORE_START",
  START = "START",
  SUSPEND = "SUSPEND",
  END = "END",
}


export type UpdateUserInput = {
  id: string,
  name?: string | null,
  email?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateToDoInput = {
  id?: string | null,
  description?: string | null,
  status?: ToDoStatus | null,
  startedAt?: string | null,
  finishedAt?: string | null,
  updatedAt?: string | null,
  cratedAt: string,
  userID: string,
};

export type ModelToDoConditionInput = {
  description?: ModelStringInput | null,
  status?: ModelToDoStatusInput | null,
  startedAt?: ModelStringInput | null,
  finishedAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  cratedAt?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelToDoConditionInput | null > | null,
  or?: Array< ModelToDoConditionInput | null > | null,
  not?: ModelToDoConditionInput | null,
};

export type ModelToDoStatusInput = {
  eq?: ToDoStatus | null,
  ne?: ToDoStatus | null,
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

export type UpdateToDoInput = {
  id: string,
  description?: string | null,
  status?: ToDoStatus | null,
  startedAt?: string | null,
  finishedAt?: string | null,
  updatedAt?: string | null,
  cratedAt?: string | null,
  userID?: string | null,
};

export type DeleteToDoInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelToDoFilterInput = {
  id?: ModelIDInput | null,
  description?: ModelStringInput | null,
  status?: ModelToDoStatusInput | null,
  startedAt?: ModelStringInput | null,
  finishedAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  cratedAt?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelToDoFilterInput | null > | null,
  or?: Array< ModelToDoFilterInput | null > | null,
  not?: ModelToDoFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
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
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
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
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionToDoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  description?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  startedAt?: ModelSubscriptionStringInput | null,
  finishedAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  cratedAt?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionToDoFilterInput | null > | null,
  or?: Array< ModelSubscriptionToDoFilterInput | null > | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email: string,
    ToDos?:  {
      __typename: "ModelToDoConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email: string,
    ToDos?:  {
      __typename: "ModelToDoConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email: string,
    ToDos?:  {
      __typename: "ModelToDoConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateToDoMutationVariables = {
  input: CreateToDoInput,
  condition?: ModelToDoConditionInput | null,
};

export type CreateToDoMutation = {
  createToDo?:  {
    __typename: "ToDo",
    id: string,
    description?: string | null,
    status?: ToDoStatus | null,
    startedAt?: string | null,
    finishedAt?: string | null,
    updatedAt: string,
    cratedAt: string,
    userID: string,
    createdAt: string,
  } | null,
};

export type UpdateToDoMutationVariables = {
  input: UpdateToDoInput,
  condition?: ModelToDoConditionInput | null,
};

export type UpdateToDoMutation = {
  updateToDo?:  {
    __typename: "ToDo",
    id: string,
    description?: string | null,
    status?: ToDoStatus | null,
    startedAt?: string | null,
    finishedAt?: string | null,
    updatedAt: string,
    cratedAt: string,
    userID: string,
    createdAt: string,
  } | null,
};

export type DeleteToDoMutationVariables = {
  input: DeleteToDoInput,
  condition?: ModelToDoConditionInput | null,
};

export type DeleteToDoMutation = {
  deleteToDo?:  {
    __typename: "ToDo",
    id: string,
    description?: string | null,
    status?: ToDoStatus | null,
    startedAt?: string | null,
    finishedAt?: string | null,
    updatedAt: string,
    cratedAt: string,
    userID: string,
    createdAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email: string,
    ToDos?:  {
      __typename: "ModelToDoConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name?: string | null,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetToDoQueryVariables = {
  id: string,
};

export type GetToDoQuery = {
  getToDo?:  {
    __typename: "ToDo",
    id: string,
    description?: string | null,
    status?: ToDoStatus | null,
    startedAt?: string | null,
    finishedAt?: string | null,
    updatedAt: string,
    cratedAt: string,
    userID: string,
    createdAt: string,
  } | null,
};

export type ListToDosQueryVariables = {
  filter?: ModelToDoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListToDosQuery = {
  listToDos?:  {
    __typename: "ModelToDoConnection",
    items:  Array< {
      __typename: "ToDo",
      id: string,
      description?: string | null,
      status?: ToDoStatus | null,
      startedAt?: string | null,
      finishedAt?: string | null,
      updatedAt: string,
      cratedAt: string,
      userID: string,
      createdAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ToDosByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelToDoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ToDosByUserIDQuery = {
  toDosByUserID?:  {
    __typename: "ModelToDoConnection",
    items:  Array< {
      __typename: "ToDo",
      id: string,
      description?: string | null,
      status?: ToDoStatus | null,
      startedAt?: string | null,
      finishedAt?: string | null,
      updatedAt: string,
      cratedAt: string,
      userID: string,
      createdAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email: string,
    ToDos?:  {
      __typename: "ModelToDoConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email: string,
    ToDos?:  {
      __typename: "ModelToDoConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email: string,
    ToDos?:  {
      __typename: "ModelToDoConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateToDoSubscriptionVariables = {
  filter?: ModelSubscriptionToDoFilterInput | null,
};

export type OnCreateToDoSubscription = {
  onCreateToDo?:  {
    __typename: "ToDo",
    id: string,
    description?: string | null,
    status?: ToDoStatus | null,
    startedAt?: string | null,
    finishedAt?: string | null,
    updatedAt: string,
    cratedAt: string,
    userID: string,
    createdAt: string,
  } | null,
};

export type OnUpdateToDoSubscriptionVariables = {
  filter?: ModelSubscriptionToDoFilterInput | null,
};

export type OnUpdateToDoSubscription = {
  onUpdateToDo?:  {
    __typename: "ToDo",
    id: string,
    description?: string | null,
    status?: ToDoStatus | null,
    startedAt?: string | null,
    finishedAt?: string | null,
    updatedAt: string,
    cratedAt: string,
    userID: string,
    createdAt: string,
  } | null,
};

export type OnDeleteToDoSubscriptionVariables = {
  filter?: ModelSubscriptionToDoFilterInput | null,
};

export type OnDeleteToDoSubscription = {
  onDeleteToDo?:  {
    __typename: "ToDo",
    id: string,
    description?: string | null,
    status?: ToDoStatus | null,
    startedAt?: string | null,
    finishedAt?: string | null,
    updatedAt: string,
    cratedAt: string,
    userID: string,
    createdAt: string,
  } | null,
};
