import PropTypes from 'prop-types';
import React from 'react';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = props => {
  const clickHandler = ev => {
    props.onClick(ev.target.dataset.url);
  };

  return (
    <li id={props.id} className={css.ImageGalleryItem}>
      <img
        className={css['ImageGalleryItem-image']}
        src={props.url}
        alt=""
        data-url={props.dataUrl}
        onClick={clickHandler}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  dataUrl: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
