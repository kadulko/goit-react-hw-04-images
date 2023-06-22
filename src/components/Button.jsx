import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from './Button.module.css';

export class Button extends Component {
  static propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func,
  };

  render() {
    return (
      <button
        className={css.Button}
        type={this.props.type || 'button'}
        onClick={this.props.onClick}
      >
        {this.props.label}
      </button>
    );
  }
}

export default Button;
