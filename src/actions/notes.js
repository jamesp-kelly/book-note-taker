import { v4 } from 'uuid';

export const ADD_NOTE = 'ADD_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const CLEAR_NOTES = 'CLEAR_NOTES';
export const DELETE_NOTES_FOR_BOOK = 'DELETE_NOTES_FOR_BOOK';

export const addNote = (title, description, bookId) => ({
  type: ADD_NOTE,
  id: v4(),
  title,
  description,
  bookId
});

export const updateNote = (id, updatedTitle, updatedDescription) => ({
  type: UPDATE_NOTE,
  id,
  updatedTitle,
  updatedDescription, 
});

export const deleteNote = (id) => ({
  type: DELETE_NOTE,
  id,
});

export const clearNotes = () => ({
  type: CLEAR_NOTES,
});

export const deleteNotesForBook = (bookId) => ({
  type: DELETE_NOTES_FOR_BOOK,
  bookId,
});