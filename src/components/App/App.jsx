import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import api from '../../services/api';
import css from './App.module.css';
import Loader from '../Loader/Loader';

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(null);
  const [error, setError] = useState(null);

  const handleSearchQueryInput = async inputText => {
    if (inputText.trim() === '') {
      setQuery('');
      setImages([]);
      setPage(null);
      return;
    } else {
      setQuery(inputText.trim());
      setIsLoading(true);
    }

    try {
      const images = await api.fetchImagesByQuery(inputText);
      setImages([...images]);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
      setPage(1);
    }
  };

  const handleLoadMore = async () => {
    let currentPage = page + 1;
    let updatedImages = [];
    setIsLoading(true);
    try {
      const nextImages = await api.fetchImagesByQuery(query, currentPage);
      updatedImages = [...images, ...nextImages];
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
      setPage(currentPage);
      setImages([...updatedImages]);
    }
  };

  useEffect(() => window.scrollTo(0, document.body.scrollHeight), [images]);

  return (
    <div className={css.App}>
      <SearchBar onFormSubmit={handleSearchQueryInput} />
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {isLoading && <Loader />}
      {!!images.length && <ImageGallery images={images} />}
      {page && <Button onClick={handleLoadMore} label={'Load more'} />}
    </div>
  );
};

export default App;
