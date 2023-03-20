import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ photo, openModal, index }) => {
  return (
    <li className={css.imagegalleryitem}>
      <a
        onClick={e => {
          e.preventDefault();
          openModal(index);
        }}
        href={photo.largeImageURL}
      >
        <img
          className={css.imagegalleryitem_image}
          src={photo.webformatURL}
          alt={photo.tags}
        />
      </a>
    </li>
  );
};

ImageGalleryItem.propTypes = {
  photo: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};
