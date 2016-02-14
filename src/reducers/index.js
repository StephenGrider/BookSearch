import { combineReducers } from 'redux';
import books from './reducer_books';
import selectedBook from './reducer_selected_book';

const rootReducer = combineReducers({
  books, selectedBook
});

export default rootReducer;
