import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from './Modal.module.css';

export class Modal extends Component {
  static propTypes = {
    imgURL: PropTypes.string,
    onClick: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className={css.Overlay} onClick={this.props.onClick}>
        <div className={css.Modal}>
          <img src={this.props.imgURL} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
