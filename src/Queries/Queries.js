import React, { Component } from "react";
import { gql } from "@apollo/client";
import { graphql } from "@apollo/client/react/hoc";

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

const addBookMutation = gql`
  mutation($name: String!, $genre: String!, $authorId: ID) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;
const getBookQuery = gql`
query($id:ID){
book(id:$id) {
    id
    name
    genre
    author{
        id
        name
        age
        books{
            name
            id
        }
    }
}
}
`;
export { getBooksQuery, getAuthorsQuery, addBookMutation ,getBookQuery};
