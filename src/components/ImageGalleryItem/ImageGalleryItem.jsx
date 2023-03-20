import React from 'react';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ photo, openModal, index }) => {
  return (
    <li className={css.imagegalleryitem} key={photo.id}>
      <a
        onClick={e => {
          e.preventDefault();
          openModal(index);
        }}
        href={photo.largeImageURL}
      >
        <img
          onClick={console.log('click')}
          className={css.imagegalleryitem_image}
          src={photo.webformatURL}
          alt={photo.tags}
        />
      </a>
    </li>
  );
};
