import React, { Component } from "react";
import { graphql } from "@apollo/client/react/hoc";
import {getBooksQuery} from '../Queries/Queries'
import BookDetails from "../Components/BookDetails"


class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected:null
    }
  }
  displayBooks() {
    let data = this.props.data;
    if (data.loading) {
      return <h1>Loading books...</h1>;
    } else {
      return data.books.map((book, index) => {
        return <li key={book.id} onClick={(e) =>{this.setState({selected:book.id})}}>{book.name}</li>;
      });
    }
  }
  render() {
    // console.log(this.props)
    return (
      <div>
        <ul className="book-list">{this.displayBooks()}</ul>
        <BookDetails bookId={this.state.selected}/>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
