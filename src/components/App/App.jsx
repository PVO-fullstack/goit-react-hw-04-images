import React, { useState, useEffect } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Searchbar } from '../Searchbar/Searchbar';
import * as API from '../../services/api';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';
import css from './App.module.css';

export const App = () => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [value, setValue] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [activeImgIdx, setActiveImgIdx] = useState(null);

  const handleGetPhotos = data => {
    setValue(data);
    setPhotos([]);
    setPage(1);
  };

  useEffect(() => {
    if (!value) {
      return;
    }
    const getPhoto = async () => {
      setIsLoading(true);
      try {
        await API.getPictures({ query: value, currentPage: page }).then(
          searchQuery => {
            if (searchQuery.hits.length < 1) {
              Notify.warning('Nothing found, try another name');
              setIsLoading(false);
              return;
            }
            setPhotos(prevState => [...prevState, ...searchQuery.hits]);
            setIsLoading(false);
          }
        );
      } catch (error) {
        console.log(error.data);
      }
    };
    getPhoto();
  }, [page, value]);

  const handleGetMorePhotos = () => setPage(prevState => prevState + 1);

  const openModal = index => {
    setShowModal(true);
    setActiveImgIdx(index);
  };

  const closeModal = () => setShowModal(false);

  return (
    <div className={css.app}>
      <Searchbar submit={handleGetPhotos} />
      <ImageGallery photos={photos} openModal={openModal} />
      {isLoading && <Loader />}
      {photos.length !== 0 && <Button getMore={handleGetMorePhotos} />}
      {showModal && (
        <Modal src={photos[activeImgIdx].largeImageURL} onClose={closeModal} />
      )}
    </div>
  );
};
