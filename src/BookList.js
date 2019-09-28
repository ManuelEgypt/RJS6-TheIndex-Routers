import React ,{Component} from "react";
import BookTable from "./BookTable";
import SearchBar from "./SearchBar";

class BookList extends Component{   
    state={
        filteredBooks:this.props.books
    }
    filterBooks = query => {
        query = query.toLowerCase();
        let filteredAuthors = this.props.authors.filter(author =>
          `${author.first_name} ${author.last_name}`.toLowerCase().includes(query)
        );
        this.setState({ filteredAuthors: filteredAuthors });
      };

    
     filterBooksByColor = bookColor => {
       return this.state.filteredBooks.filter(book => book.color === bookColor);
     };

    render(){
      const bookColor = this.props.match.params.bookColor;
      let books = this.state.filteredBooks;
    if (bookColor) {
      books = this.filterBooksByColor(bookColor);
    }
        return (
        <>
        <h3>Books</h3>
        <SearchBar onChange={this.filterBooks} />
        <BookTable books={books} />
        </>
        );
    }
}

export default BookList;