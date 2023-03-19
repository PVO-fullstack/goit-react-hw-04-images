import React, { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import css from './Searchbar.module.css';

export const Searchbar = ({ submit }) => {
  const [value, setValue] = useState('');

  const handleInput = e => {
    setValue(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) {
      Notify.warning('Please, inpute word');
      return;
    }
    submit(value);
    setValue('');
  };

  return (
    <header className={css.searchbar}>
      <form onSubmit={handleSubmit} className={css.searchform}>
        <button type="submit" className={css.searchform_button}>
          <span className={css.searchform_button_label}>Search</span>
        </button>
        <input
          onChange={handleInput}
          className={css.searchform_input}
          type="text"
          autoComplete="off"
          autoFocus
          value={value}
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
