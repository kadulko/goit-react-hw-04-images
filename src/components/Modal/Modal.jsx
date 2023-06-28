import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import css from './Modal.module.css';

const Modal = props => {
  const handleKeyDown = ev => {
    if (ev.keyCode === 27) {
      props.onClick();
    }
  };

  const ref = useRef(null);
  useEffect(() => ref.current.focus(), []);

  return (
    <div
      ref={ref}
      className={css.Overlay}
      onClick={props.onClick}
      tabIndex={-1}
      onKeyDown={handleKeyDown}
    >
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
