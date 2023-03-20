import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, src }) => {
  const handleKeydown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keyup', handleKeydown);
  });

  useEffect(() => {
    return () => {
      window.removeEventListener('keyup', handleKeydown);
    };
  });

  const handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div onClick={handleOverlayClick} className={css.overlay}>
      <div className={css.modal}>
        <img className={css.largeImg} src={src} alt="" />
      </div>
    </div>,
    modalRoot
  );
};

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
