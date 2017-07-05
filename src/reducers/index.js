import { combineReducers } from 'redux';
import books from './books';
import notes from './notes';

const rootReducer = combineReducers({
  books,
  notes
});

export default rootReducer;