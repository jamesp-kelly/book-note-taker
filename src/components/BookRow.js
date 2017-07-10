import React from 'react'; 

const BookRow = ({ book, onEdit, onDelete }) => {
  return (
    <tr>
      <td>{book.title}</td>
      <td>
        <button onClick={onEdit}>edit</button>
      </td>
      <td>
        <button onClick={onDelete}>delete</button>
      </td>
    </tr>
  );
} 

export default BookRow;
