import React, { Component } from 'react';
import BookRow from './BookRow';

class BookTable extends Component {
  render() {
    const { books, onEditBookClick, onDeleteBookClick } = this.props;
    return (
        <div>
          {
            books.map((book) => <BookRow book={book} onEdit={onEditBookClick} onDelete={onDeleteBookClick} />)
          }
        </div>
    );
  }
}

export default BookTable;