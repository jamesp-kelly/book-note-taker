import { v4 } from 'uuid';
import { TOGGLE_BOOK_FORM, SELECT_BOOK, TOGGLE_NOTE_FORM, SELECT_NOTE } from '../actions/ui';


const ui = (state = {}, action) => {
  switch(action.type) {
    case TOGGLE_BOOK_FORM:
      return {
        ...state,
        displayBookForm: action.display,
      };
    case SELECT_BOOK:
      return {
        ...state,
        selectedBookId: action.bookId,
      }
    case TOGGLE_NOTE_FORM:
      return {
        ...state,
        displayNoteForm: action.display,
      };
    case SELECT_NOTE:
      return {
        ...state,
        selectedNoteId: action.noteId,
      };
    default: 
      return state;
  }
}

export default ui;
