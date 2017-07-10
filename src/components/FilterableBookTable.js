import React, { Component } from 'react';
import BookTable from './BookTable';
import { connect } from 'react-redux';
import { updateBookTitle, deleteBook } from '../actions/books';
import { toggleBookForm } from '../actions/ui';

const FilterableBookTable = ({ dispatch, books, onDeleteClick }) => {
  return (
    <div>
      <BookTable 
        books={books} 
        onEditBookClick={(id) => () => console.log(`edit ${id}`)} 
        onDeleteBookClick={(id) => onDeleteClick(id)} 
      />
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    books: state.books
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteClick: id =>
      dispatch(deleteBook(id)),
    onEditClick: id => {
      dispatch(toggleBookForm(true))
    }
  };
}



export default connect(mapStateToProps, mapDispatchToProps)(FilterableBookTable);