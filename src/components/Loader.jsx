import React from 'react';
// import PropTypes from 'prop-types';
import css from './Loader.module.css';
import { RotatingLines } from 'react-loader-spinner';

function Loader() {
  return (
    <div className={css.backdrop}>
      <RotatingLines />
    </div>
  );
}

Loader.propTypes = {};

export default Loader;
