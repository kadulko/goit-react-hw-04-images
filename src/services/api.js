import axios from 'axios';

const API_KEY = '35273413-b89fdc0e5aebefb0e92a1164e';
axios.defaults.baseURL = 'https://pixabay.com/api';

const fetchImagesByQuery = async (searchQuery, page = 1) => {
  const response = await axios.get(
    `/?key=${API_KEY}&q=${searchQuery}&image_type=photo&page=${page}&per_page=12`
  );
  // console.log(
  //   `/?key=${API_KEY}&q=${searchQuery}&image_type=photo&page=${page}&per_page=12`
  // );
  // console.log(response.data.hits);
  return response.data.hits;
};

const api = {
  fetchImagesByQuery,
};

export default api;
