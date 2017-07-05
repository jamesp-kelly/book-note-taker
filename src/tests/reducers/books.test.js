import deepFreeze from 'deep-freeze';
import books from '../../reducers/books';
import { addBook , updateBookTitle, deleteBook, clearBooks } from '../../actions/books';

describe('Book reducers', () => {

  it('Handles unmatched action type', () => {
    const unmatchedAction = {
      type: 'PINEAPPLE'
    };

    const expectedNewState = [];

    expect(books(undefined, unmatchedAction)).toEqual(expectedNewState);
  });

  it('Handles add book reducer', () => {
    const newBookTitle = 'Harry Potter';
    const prevState = deepFreeze([]);
    const action = addBook(newBookTitle);
    const newState = books(prevState, action);

    expect(newState).toHaveLength(1);
    expect(newState[0].title).toEqual(newBookTitle);
    expect(newState[0].id).toBeDefined();
  });

  it('Handles update book title reducer', () => {
    const updatedBookTitle = 'A Game of Thrones';
    const idToUpdate = 'fee6d8a7-0c42-4f9f-80da-f97f0c771ac1';

    const prevState = deepFreeze([{
        id: idToUpdate,
        title: 'Song of Fire and Ice'
      },
      {
        id: 'ee4434ec-6f96-4e2a-81c2-b89182a5d328',
        title: 'The Hobbit'
      }
    ]);
    
    const action = updateBookTitle(idToUpdate, updatedBookTitle);
    const expectedNewState = [{
        id: idToUpdate,
        title: updatedBookTitle
      },
      {
        id: 'ee4434ec-6f96-4e2a-81c2-b89182a5d328',
        title: 'The Hobbit'
      }
    ];

    const newState = books(prevState, action);
    expect(newState).toEqual(expectedNewState);
  });

  it('handles delete book reducer', () => {
    const idToDelete = 'fee6d8a7-0c42-4f9f-80da-f97f0c771ac1';

    const prevState = deepFreeze([{
        id: '7ecd13e1-d8fa-4b7a-80cc-0ae80012a809',
        title: 'Way of Kings'
      },
      {
        id: idToDelete,
        title: 'Song of Fire and Ice'
      },
      {
        id: 'ee4434ec-6f96-4e2a-81c2-b89182a5d328',
        title: 'The Hobbit'
      }
    ]);

    const action = deleteBook(idToDelete);
    const newState = books(prevState, action);

    expect(newState).toHaveLength(2);
    expect(newState[0].id).not.toEqual(idToDelete);
    expect(newState[1].id).not.toEqual(idToDelete);
  });

  it('handles clear book reducer', () => {
    const prevState = deepFreeze([{
        id: '7ecd13e1-d8fa-4b7a-80cc-0ae80012a809',
        title: 'Way of Kings'
      },
      {
        id: 'ee4434ec-6f96-4e2a-81c2-b89182a5d328',
        title: 'The Hobbit'
      }
    ]);

    const action = clearBooks();
    const newState = books(prevState, action);

    expect(newState).toEqual([]);
  })
});