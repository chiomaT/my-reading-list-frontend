import React, { Component } from "react";
import { graphql } from "@apollo/client/react/hoc";
import {getBookQuery} from '../Queries/Queries'


class BookDetails extends Component {
  displayBookDetails(){
    const {book} = this.props.data
    if(book) {
      return (
        <div>
          <h4>Name: {book.name}</h4>
          <p>Genre: {book.genre}</p>
          <p>Author: {book.author.name}</p>
          <p>All books by this author:</p>
          <ul>
          {book.author.books.map(item => {
            return <li key ={item.id}>{item.name}</li>
          })}
          </ul>
        </div>
      )
    }else{
      return (
        <div>
          no book selected...
        </div>
      )
    }
  }
render() {
console.log(this.props)
      return (
        <div className= "book-details">
         <h2>Book details</h2>
         {this.displayBookDetails()}
        </div>
      );
    }
  }
  
  export default graphql(getBookQuery,{
    options:(props) => {
      return {
        variables:{
          id: props.bookId
        }
      }
    }
  })(BookDetails);