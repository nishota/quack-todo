/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    name
    email
    ToDos {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      email
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getToDo = /* GraphQL */ `query GetToDo($id: ID!) {
  getToDo(id: $id) {
    id
    description
    status
    startedAt
    finishedAt
    updatedAt
    cratedAt
    userID
    createdAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetToDoQueryVariables, APITypes.GetToDoQuery>;
export const listToDos = /* GraphQL */ `query ListToDos(
  $filter: ModelToDoFilterInput
  $limit: Int
  $nextToken: String
) {
  listToDos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      description
      status
      startedAt
      finishedAt
      updatedAt
      cratedAt
      userID
      createdAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListToDosQueryVariables, APITypes.ListToDosQuery>;
export const toDosByUserID = /* GraphQL */ `query ToDosByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelToDoFilterInput
  $limit: Int
  $nextToken: String
) {
  toDosByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      description
      status
      startedAt
      finishedAt
      updatedAt
      cratedAt
      userID
      createdAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ToDosByUserIDQueryVariables,
  APITypes.ToDosByUserIDQuery
>;
