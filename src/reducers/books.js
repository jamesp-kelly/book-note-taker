import { ADD_BOOK, UPDATE_BOOK_TITLE, DELETE_BOOK, CLEAR_BOOKS } from '../actions/books';

const book = (state = {}, action) => {
  switch(action.type) {
    case ADD_BOOK:
      return {
        id: action.id,
        title: action.title
      };
    case UPDATE_BOOK_TITLE:
      if (state.id !== action.id) {
        return state;
      } else {
        return {
          ...state,
          title: action.updatedTitle
        };
      }
    default:
      return state;
  }
};

const books = (state = [], action) => {
  switch(action.type) {
    case ADD_BOOK:
      return [
        ...state,
        book(undefined, action)
      ];
    case UPDATE_BOOK_TITLE:
      return state.map(b => book(b, action));
    case DELETE_BOOK:
      const bookToDelete = state.find(b => b.id === action.id);
      const bookIndex = state.indexOf(bookToDelete);
      return [
        ...state.slice(0, bookIndex),
        ...state.slice(bookIndex + 1)
      ];
    case CLEAR_BOOKS:
      return [];
    default:
      return state;
  }
};

export default books;