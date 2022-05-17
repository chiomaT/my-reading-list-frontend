import React, { Component } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

//components
import BookList from "../src/Components/BookList";
import AuthorList from "../src/Components/AddBook";

//apollo client setup
const client = new ApolloClient({
  uri: process.env.REACT_APP_BACKEND_URI,
  cache: new InMemoryCache(),
});
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="main">
          <h1>My Reading List</h1>
          <BookList />
          <AuthorList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
