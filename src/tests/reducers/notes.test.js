import notes from '../../reducers/notes';
import deepFreeze from 'deep-freeze';
import { addNote , updateNote, deleteNote, deleteNotesForBook, clearNotes } from '../../actions/notes';

describe('Note reducers', () => {
  it('Handles unmatched action type', () => {
    const unmatchedAction = {
      type: 'PINEAPPLE'
    };

    const expectedNewState = [];

    expect(notes(undefined, unmatchedAction)).toEqual(expectedNewState);
  });

  it('Handles add note reducer', () => {
    const newNoteTitle = 'Gandalf';
    const newNoteDescription = 'The wizard';
    const newNoteBookId = '16d85da4-426a-47f1-bc79-7c81f5adcad8';

    const prevState = deepFreeze([]);
    const action = addNote(newNoteTitle, newNoteDescription, newNoteBookId);
    const newState = notes(prevState, action);

    expect(newState).toHaveLength(1);
    expect(newState[0].title).toEqual(newNoteTitle);
    expect(newState[0].description).toEqual(newNoteDescription);
    expect(newState[0].bookId).toEqual(newNoteBookId);
    expect(newState[0].id).toBeDefined();
  });

  it('Handles update note reducer', () => {
    const idToUpdate = 'c4e67a8e-2e9d-4053-97fb-a707e196af6e'
    const updatedDescription = 'A really powerful weapon';
    const oldTitle = 'Shardblade';
    const prevState = deepFreeze([
      {
        id: idToUpdate,
        title: oldTitle,
        description: 'Powerful weapon',
        bookId: 'b4631b14-a17f-415e-8a18-c2e2be2fd00d',
      },
      {
        id: 'c9d26d3d-cf8e-4498-bb96-9fc412077508',
        title: 'Bilbo',
        description: 'The hobbit',
        bookId: '45a458f9-8e1c-43f1-9a63-919526fcca5e',
      },
    ]);

    const action = updateNote(idToUpdate, undefined, updatedDescription);
    const newState = notes(prevState, action);

    expect(newState).toHaveLength(2);
    expect(newState[0].id).toEqual(idToUpdate);
    expect(newState[0].description).toEqual(updatedDescription);
    expect(newState[0].title).toEqual(oldTitle);
  });

  it('handles delete note reducer', () => {
    const noteToDelete = {
      id: '46a28137-de1e-4a84-9d92-185146e7558c',
      title: 'Gandalf',
      description: 'The wizard',
      bookId: '45a458f9-8e1c-43f1-9a63-919526fcca5e',
    };

    const prevState = deepFreeze([
      {
        id: 'c4e67a8e-2e9d-4053-97fb-a707e196af6e',
        title: 'Shardblade',
        description: 'Powerful weapon',
        bookId: 'b4631b14-a17f-415e-8a18-c2e2be2fd00d',
      },
      {
        id: 'c9d26d3d-cf8e-4498-bb96-9fc412077508',
        title: 'Bilbo',
        description: 'The hobbit',
        bookId: '45a458f9-8e1c-43f1-9a63-919526fcca5e',
      }, 
      noteToDelete,
    ]);

    const action = deleteNote(noteToDelete.id);
    const newState = notes(prevState, action);

    expect(newState).toHaveLength(2);
    expect(newState).not.toEqual(expect.arrayContaining([noteToDelete]));
  });

  it('handles delete notes for book reducer', () => {
    const bookIdToDelete = '45a458f9-8e1c-43f1-9a63-919526fcca5e';

    const prevState = deepFreeze([
      {
        id: 'c4e67a8e-2e9d-4053-97fb-a707e196af6e',
        title: 'Shardblade',
        description: 'Powerful weapon',
        bookId: 'b4631b14-a17f-415e-8a18-c2e2be2fd00d',
      },
      {
        id: 'c9d26d3d-cf8e-4498-bb96-9fc412077508',
        title: 'Bilbo',
        description: 'The hobbit',
        bookId: bookIdToDelete,
      }, 
      {
        id: '46a28137-de1e-4a84-9d92-185146e7558c',
        title: 'Gandalf',
        description: 'The wizard',
        bookId: bookIdToDelete,
      }
    ]);

    const action = deleteNotesForBook(bookIdToDelete);
    const newState = notes(prevState, action);

    expect(newState).toHaveLength(1);
    expect(newState[0].title).toEqual('Shardblade');
  });

  it('handles clear notes reducer', () => {
    const prevState = deepFreeze([{
      id: 'c4e67a8e-2e9d-4053-97fb-a707e196af6e',
      title: 'Shardblade',
      description: 'Powerful weapon',
      bookId: 'b4631b14-a17f-415e-8a18-c2e2be2fd00d',
    },
    {
      id: 'c9d26d3d-cf8e-4498-bb96-9fc412077508',
      title: 'Bilbo',
      description: 'The hobbit',
      bookId: '45a458f9-8e1c-43f1-9a63-919526fcca5e',
    }, 
    {
      id: '46a28137-de1e-4a84-9d92-185146e7558c',
      title: 'Gandalf',
      description: 'The wizard',
      bookId: '45a458f9-8e1c-43f1-9a63-919526fcca5e',
    }]);

    const action = clearNotes();
    const newState = notes(prevState, action);

    expect(newState).toEqual([]);
  })
});