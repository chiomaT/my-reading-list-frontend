import React, { Component } from "react";
import { graphql } from "@apollo/client/react/hoc";
import {flowRight as compose} from 'lodash';
import {getBooksQuery, getAuthorsQuery,addBookMutation} from '../Queries/Queries'



class AuthorList extends Component {
//a function to add books
constructor(props) {
    super(props) 
    this.state = {
        name:"",
        gender:"",
        authorId:""
    }
}
  //display authors in the select box
  displayAuthors() {
    let data = this.props.getAuthorsQuery;
    if (data.loading) {
      return <option>Loading authors...</option>;
    } else {
      return data.authors.map((author, index) => {
        return <option key={author.id}>{author.name}</option>;
      });
    }
  }
  //submit function
  submitForm(e) {
      e.preventDefault();
     this.props.addBookMutation({
         variables: {
             name:this.state.name,
             genre:this.state.genre,
             authorId:this.state.authorId
         },
         refetchQueries:[{ query:getBooksQuery }]
     })
  }

  render() {
    // console.log(this.props)
    return (
      <form className="add-book" onSubmit={this.submitForm.bind(this)}>
        <div className="field">
          <label>Book Name:</label>
          <input type="text" onChange={(e) =>this.setState({name:e.target.value})}></input>
        </div>

        <div className="field">
          <label>Genre:</label>
          <input type="text" onChange={(e) =>this.setState({genre:e.target.value})}></input>
        </div>

        <div className="field">
          <label>Author:</label>
          <select onChange={(e) =>this.setState({authorId:e.target.value})}>
            <option>Select author</option>
            {this.displayAuthors()}
          </select>
        </div>

        <button>+</button>
      </form>
    );
  }
}

export default compose(
    //bind querie and mutation together
graphql(getAuthorsQuery, {name:"getAuthorsQuery"}),
graphql(addBookMutation, {name:"addBookMutation"})
)
(AuthorList);
