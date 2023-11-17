// reviews-api.js

import axios from 'axios';

const baseURL = '/api/reviews';

export const getAll = async () => {
  const response = await axios.get(baseURL);
  return response.data;
};

export const getReviewsByArtist = async (artistId) => {
  const response = await axios.get(`${baseURL}/artists/${artistId}`);
  return response.data;
};

export const addReview = async (review, artist) => {
  const response = await axios.post(`${baseURL}/artists/${artist}`, review);
  return response.data;
};

export const updateReview = async (reviewId, updatedReview) => {
  const response = await axios.put(`${baseURL}/${reviewId}`, updatedReview);
  return response.data;
};

export const deleteReview = async (reviewId) => {
  const response = await axios.delete(`${baseURL}/${reviewId}`);
  return response.data;
};
