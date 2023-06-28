import PropTypes from 'prop-types';
import React from 'react';
import css from './Button.module.css';

const Button = props => {
  return (
    <button
      className={css.Button}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
