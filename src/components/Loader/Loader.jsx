import React from 'react';

import css from './Loader.module.css';
import { RotatingLines } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className={css.backdrop}>
      <RotatingLines />
    </div>
  );
};

export default Loader;
