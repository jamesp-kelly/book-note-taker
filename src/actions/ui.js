export const TOGGLE_BOOK_FORM = 'TOGGLE_BOOK_FORM';
export const SELECT_BOOK = 'SELECT_BOOK';
export const TOGGLE_NOTE_FORM = 'TOGGLE_NOTE_FORM';
export const SELECT_NOTE = 'SELECT_NOTE';

export const toggleBookForm = (display) => ({
  type: TOGGLE_BOOK_FORM,
  display,
});

export const selectBook = (bookId) => ({
  type: SELECT_BOOK,
  bookId,
});

export const toggleNoteForm = (display) => ({
  type: TOGGLE_NOTE_FORM,
  display
});

export const selectNote = (noteId) => ({
  type: SELECT_NOTE,
  noteId,
});
