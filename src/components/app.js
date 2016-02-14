import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import BookList from '../components/book_list';
import BookDetail from '../components/book_detail';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    const value = event.target.value

    this.props.searchBooks(value);
    this.setState({ term: value });
  }

  render() {
    return (
      <div>
        <input value={this.state.term} onChange={this.onInputChange} />
        <BookList />
        <BookDetail />
      </div>
    );
  }
};

export default connect(null, actions)(App);
