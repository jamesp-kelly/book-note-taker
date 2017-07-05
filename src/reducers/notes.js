import { v4 } from 'uuid';
import { ADD_NOTE, UPDATE_NOTE, DELETE_NOTE, DELETE_NOTES_FOR_BOOK, CLEAR_NOTES } from '../actions/notes';


const note = (state = {}, action) => {
  switch(action.type) {
    case ADD_NOTE:
      return {
        id: v4(),
        title: action.title,
        description: action.description,
        bookId: action.bookId
      }
    case UPDATE_NOTE:
      if (state.id !== action.id) {
        return state;
      } else {
        const { updatedTitle, updatedDescription } = action;
        
        return {
          ...state,
          title: updatedTitle ?  updatedTitle : state.title,
          description: updatedDescription ? updatedDescription : state.description,
        }
      }
    default: 
      return state;
  }
}


const notes = (state = [], action) => {
  switch(action.type) {
    case ADD_NOTE:
      return [
        note(undefined, action),
        ...state
      ];
    case UPDATE_NOTE:
      return state.map(n => note(n, action));
    case DELETE_NOTE:
      const noteToDelete = state.find(n => n.id === action.id);
      const noteIndex = state.indexOf(noteToDelete);
      return [
        ...state.slice(0, noteIndex),
        ...state.slice(noteIndex + 1)
      ];
    case DELETE_NOTES_FOR_BOOK:
      return state.filter(n => n.bookId !== action.bookId);
    case CLEAR_NOTES:
      return [];
    default: 
      return state;
  }
}

export default notes;