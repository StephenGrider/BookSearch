import {
  BOOK_SELECTED,
  BOOK_SEARCH
} from './types';

export function selectBook(book) {
  return {
    type: BOOK_SELECTED,
    payload: book
  };
}

export function searchBooks(term) {
  return {
    type: BOOK_SEARCH,
    payload: term
  };
}
