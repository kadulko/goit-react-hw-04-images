import PropTypes from 'prop-types';
import React from 'react';
import css from './SearchBar.module.css';

const SearchBar = props => {
  const handleSubmit = ev => {
    ev.preventDefault();
    const inputText = ev.target.input.value;
    props.onFormSubmit(inputText);
  };

  return (
    <header className={css.Searchbar}>
      <form onSubmit={handleSubmit} className={css.SearchForm}>
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
};

SearchBar.propTypes = { onFormSubmit: PropTypes.func };

export default SearchBar;
