import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import api from 'services/api';
import css from './App.module.css';
import Loader from './Loader';

export class App extends Component {
  state = {
    query: '',
    images: [],
    isLoading: false,
    page: null,
    error: null,
  };

  handleSearchQueryInput = async inputText => {
    if (inputText.trim() === '') {
      this.setState({ query: '', images: [], page: null });
      return;
    } else {
      this.setState({ query: inputText.trim(), isLoading: true });
    }

    try {
      const images = await api.fetchImagesByQuery(inputText);
      this.setState({ images });
      console.log(images);
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false, page: 1 });
    }
  };

  handleLoadMore = async () => {
    let currentPage = this.state.page + 1;
    let updatedImages = [];
    this.setState({
      isLoading: true,
    });
    try {
      const images = await api.fetchImagesByQuery(
        this.state.query,
        currentPage
      );
      updatedImages = [...this.state.images, ...images];
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({
        isLoading: false,
        page: currentPage,
        images: [...updatedImages],
      });
    }
  };

  componentDidUpdate() {
    window.scrollTo(0, document.body.scrollHeight);
  }

  async componentDidMount() {
    // this.setState({ isLoading: true });
    // try {
    //   const images = await api.fetchImagesByQuery(this.state.query);
    //   this.setState({ images });
    //   console.log(images);
    // } catch (error) {
    //   this.setState({ error });
    // } finally {
    //   this.setState({ isLoading: false });
    // }
  }

  render() {
    const { images, isLoading, error } = this.state;
    return (
      <div className={css.App}>
        <SearchBar onFormSubmit={this.handleSearchQueryInput} />
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading && <Loader />}
        {!!images.length && <ImageGallery images={images} />}
        {this.state.page && (
          <Button onClick={this.handleLoadMore} label={'Load more'} />
        )}
      </div>
    );
  }
}

export default App;
