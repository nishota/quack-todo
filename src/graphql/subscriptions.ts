/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateToDo = /* GraphQL */ `subscription OnCreateToDo($filter: ModelSubscriptionToDoFilterInput) {
  onCreateToDo(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateToDoSubscriptionVariables,
  APITypes.OnCreateToDoSubscription
>;
export const onUpdateToDo = /* GraphQL */ `subscription OnUpdateToDo($filter: ModelSubscriptionToDoFilterInput) {
  onUpdateToDo(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateToDoSubscriptionVariables,
  APITypes.OnUpdateToDoSubscription
>;
export const onDeleteToDo = /* GraphQL */ `subscription OnDeleteToDo($filter: ModelSubscriptionToDoFilterInput) {
  onDeleteToDo(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteToDoSubscriptionVariables,
  APITypes.OnDeleteToDoSubscription
>;
