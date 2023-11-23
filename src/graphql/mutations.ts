/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createToDo = /* GraphQL */ `mutation CreateToDo(
  $input: CreateToDoInput!
  $condition: ModelToDoConditionInput
) {
  createToDo(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateToDoMutationVariables,
  APITypes.CreateToDoMutation
>;
export const updateToDo = /* GraphQL */ `mutation UpdateToDo(
  $input: UpdateToDoInput!
  $condition: ModelToDoConditionInput
) {
  updateToDo(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateToDoMutationVariables,
  APITypes.UpdateToDoMutation
>;
export const deleteToDo = /* GraphQL */ `mutation DeleteToDo(
  $input: DeleteToDoInput!
  $condition: ModelToDoConditionInput
) {
  deleteToDo(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteToDoMutationVariables,
  APITypes.DeleteToDoMutation
>;
