import React from 'react';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ photo }) => {
  return (
    <>
      <img
        className={css.imagegalleryitem_image}
        src={photo.webformatURL}
        alt={photo.tags}
      />
    </>
  );
};
