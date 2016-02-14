import _ from 'lodash';
import { BOOK_SEARCH } from '../actions/types';

const BOOKS = [
  { title: 'Javascript: The Good Parts', pages: 101 },
  { title: 'Harry Potter', pages: 39 },
  { title: 'The Dark Tower', pages: 85 },
  { title: 'Eloquent Ruby', pages: 1 }
];

export default function(state = BOOKS, action) {
  switch(action.type) {
  case BOOK_SEARCH:
    return _.filter(BOOKS, book => book.title.match(action.payload))
  default:
    return state;
  }
}
