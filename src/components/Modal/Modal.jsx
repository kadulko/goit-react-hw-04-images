import PropTypes from 'prop-types';
import React from 'react';
import css from './Modal.module.css';

const Modal = props => {
  return (
    <div className={css.Overlay} onClick={props.onClick}>
      <div className={css.Modal}>
        <img src={props.imgURL} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  imgURL: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Modal;
