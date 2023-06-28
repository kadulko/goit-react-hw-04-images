import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import Modal from '../Modal/Modal';

const ImageGallery = props => {
  const [showImageModal, setShowImageModal] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  const showImage = imgUrl => {
    setImageUrl(imgUrl);
    setShowImageModal(true);
  };

  const closeImageModal = () => {
    setShowImageModal(false);
    setImageUrl('');
  };

  return (
    <>
      {showImageModal && <Modal imgURL={imageUrl} onClick={closeImageModal} />}
      <ul className={css.ImageGallery}>
        {props.images.map(image => (
          <ImageGalleryItem
            key={image.id}
            id={image.id}
            url={image.webformatURL}
            dataUrl={image.largeImageURL}
            onClick={showImage}
          />
        ))}
      </ul>
    </>
  );
};

ImageGallery.propTypes = { images: PropTypes.array };

export default ImageGallery;
