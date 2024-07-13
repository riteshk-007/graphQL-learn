import { gql } from "@apollo/client";

export const GET_TODOS = gql`
  #graphql

  query GET_TODOS {
    getTodos {
      id
      todo
      completed
      createdAt
    }
  }
`;

export const CREATE_TODO = gql`
  #graphql

  mutation CREATE_TODO($todo: String!) {
    createTodo(todo: $todo) {
      id
      todo
      completed
      createdAt
    }
  }
`;
