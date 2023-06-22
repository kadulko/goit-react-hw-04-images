import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from './SearchBar.module.css';

export class SearchBar extends Component {
  static propTypes = { onFormSubmit: PropTypes.func };

  handleSubmit = ev => {
    ev.preventDefault();
    const inputText = ev.target.input.value;
    this.props.onFormSubmit(inputText);
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form onSubmit={this.handleSubmit} className={css.SearchForm}>
          <button className={css['SearchForm-button']} type="submit"></button>
          <input
            className={css['SearchForm-input']}
            name="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          ></input>
        </form>
      </header>
    );
  }
}

export default SearchBar;
