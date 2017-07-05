import React, { Component } from 'react';
import BookTable from './BookTable';
import { connect } from 'react-redux';
import { updateBookTitle, deleteBook } from '../actions/books';

class FilterableBookTable extends Component {
  render() {
    const { dispatch } = this.props;
    return (
      <div>
        <BookTable 
          books={this.props.books} 
          onEditBookClick={(id) => () => console.log(`edit ${id}`)} 
          onDeleteBookClick={(id) => () => dispatch(deleteBook(id))} 
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    books: state.books
  };
};



export default connect(mapStateToProps)(FilterableBookTable);