// Inside ReviewPageForm.jsx

import React, { useState, useEffect, useCallback } from 'react';
import { useForm } from '../../hooks/useForm.js';
import * as reviewsAPI from '../../utilities/reviews-api.js';

export default function ReviewPageForm({ addReview, selectedArtist, authContext }) {
  const [content, setContent] = useState('');
  const [existingReview, setExistingReview] = useState(null);
  const { handleChange, handleSubmit, handleReset, values } = useForm(submit);

  const fetchExistingReview = useCallback(async () => {
    try {
      const response = await reviewsAPI.getReviewsByArtist(selectedArtist);
      const reviews = Array.isArray(response) ? response : [];
      const userReview = reviews.find((review) => review.user._id === authContext.user?._id);
      setExistingReview(userReview);
      if (userReview) {
        setContent(userReview.content);
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  }, [selectedArtist, authContext.user]);

  useEffect(() => {
    fetchExistingReview();
  }, [fetchExistingReview]);

  async function submit() {
    try {
      if (existingReview) {
        await reviewsAPI.updateReview(existingReview._id, { content });
      } else {
        await addReview({ content }, { selectedArtist });
      }
      handleReset();
      fetchExistingReview();
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  }

  const handleEdit = (review) => {
    // Implement your edit logic here
    console.log('Edit review:', review);
  };

  const handleDelete = (review) => {
    // Implement your delete logic here
    console.log('Delete review:', review);
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <textarea
        name="content"
        value={values.content || content}
        onChange={handleChange}
        required
        placeholder="Write your review here..."
      ></textarea>
      <button type="submit">Post Review</button>
      {existingReview && (
        <div>
          <p>
            {existingReview.user.name} said: "{existingReview.content}"{' '}
            <span className="timestamp">{new Date(existingReview.createdAt).toLocaleString()}</span>
          </p>
          {/* Conditionally render edit and delete options */}
          {authContext.user?._id === existingReview.user._id && (
            <div>
              <button type="button" onClick={() => handleEdit(existingReview)}>
                Edit
              </button>
              <button type="button" onClick={() => handleDelete(existingReview)}>
                Delete
              </button>
            </div>
          )}
        </div>
      )}
    </form>
  );
}
