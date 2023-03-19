import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ photos, openModal }) => {
  return (
    <ul className={css.imagegallery}>
      {photos.map((photo, index) => (
        <li className={css.imagegalleryitem} key={photo.id}>
          <a
            onClick={e => {
              e.preventDefault();
              openModal(index);
            }}
            href={photo.largeImageURL}
          >
            <ImageGalleryItem photo={photo} />
          </a>
        </li>
      ))}
    </ul>
  );
};
