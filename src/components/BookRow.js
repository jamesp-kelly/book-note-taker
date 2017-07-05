import React, { Component } from 'react'; 

class BookRow extends Component {
  render() {
    const { book, onEdit, onDelete } = this.props;

    return (
      <tr>
        <td>{book.title}</td>
        <td>
          <button onClick={onEdit(book.id)}>edit</button>
        </td>
        <td>
          <button onClick={onDelete(book.id)}>delete</button>
        </td>
      </tr>
    );
  }
}

export default BookRow;
