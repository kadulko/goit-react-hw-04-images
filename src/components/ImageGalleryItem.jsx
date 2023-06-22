import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    dataUrl: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  clickHandler = ev => {
    console.log(ev);
    this.props.onClick(ev.target.dataset.url);
  };

  render() {
    return (
      <li id={this.props.id} className={css.ImageGalleryItem}>
        <img
          className={css['ImageGalleryItem-image']}
          src={this.props.url}
          alt=""
          data-url={this.props.dataUrl}
          onClick={this.clickHandler}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
