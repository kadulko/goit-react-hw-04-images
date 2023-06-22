import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import css from './ImageGallery.module.css';
import Modal from './Modal';

export class ImageGallery extends Component {
  static propTypes = { images: PropTypes.array };
  state = {
    showImageModal: false,
    imageUrl: '',
  };

  showImage = imgUrl => {
    this.setState({ showImageModal: true, imageUrl: imgUrl });
  };

  closeImageModal = () => {
    this.setState({ showImageModal: false, imageUrl: '' });
  };

  render() {
    return (
      <>
        {this.state.showImageModal && (
          <Modal imgURL={this.state.imageUrl} onClick={this.closeImageModal} />
        )}
        <ul className={css.ImageGallery}>
          {this.props.images.map(image => (
            <ImageGalleryItem
              key={image.id}
              id={image.id}
              url={image.webformatURL}
              dataUrl={image.largeImageURL}
              onClick={this.showImage}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default ImageGallery;
