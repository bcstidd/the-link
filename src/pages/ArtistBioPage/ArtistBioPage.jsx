import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as artistsAPI from '../../utilities/artists-api';
import * as reviewsAPI from '../../utilities/reviews-api';
import ReviewPageForm from '../../components/ReviewPageForm/ReviewPageForm';
import EditForm from '../../components/EditForm/EditForm';
import './ArtistBioPage.css';

export default function ArtistBioPage({ user, deleteReview, updateReview }) {
  const [reviewList, setReviewList] = useState([]);
  const { selectedArtist } = useParams();
  const [artist, setArtist] = useState({});

  useEffect(() => {
    async function getArtist() {
      try {
        let fetchedArtist = await artistsAPI.getOneArtist(selectedArtist);
        setArtist(fetchedArtist || {}); // Ensure artist is an object
      } catch (error) {
        console.error('Error fetching artist:', error);
      }
    }
    getArtist();
  }, [selectedArtist]);

  useEffect(() => {
    async function getMyData() {
      try {
        const artist = await artistsAPI.getOneArtist(selectedArtist);
        setReviewList(artist.reviews || []); // Ensure reviews is an array
      } catch (error) {
        console.error('Error fetching artist data:', error);
      }
    }
    getMyData();
  }, [selectedArtist]);

  const canModifyReview = (reviewUserId) => {
    return user && user._id === reviewUserId;
  };

  const addReview = async (newReview, newForm) => {
    try {
      const newestReview = await reviewsAPI.addReview(newReview, newForm);
      setReviewList([...reviewList, newestReview]);
    } catch (error) {
      console.error('Error adding review:', error);
    }
  };

  const deleteReviewHandler = async (reviewId) => {
    try {
      await reviewsAPI.deleteReview(reviewId);
      const newReviewList = reviewList.filter((review) => review._id !== reviewId);
      setReviewList(newReviewList);
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };

  const updateReviewHandler = async (reviewId, newContent) => {
    try {
      const updatedReview = await reviewsAPI.updateReview(reviewId, newContent);
      const updatedReviewList = reviewList.map((review) =>
        review._id === reviewId ? updatedReview : review
      );
      setReviewList(updatedReviewList);
    } catch (error) {
      console.error('Error updating review:', error);
    }
  };

  return (
    <>
      <h1 className="artist-name">{artist.name}</h1>
      <div className="bio-page">
        <h3>{artist.shop}</h3>
        <img id="bio-photo" src={artist.photo} alt="" />
        <div>
          <h2>
            Interested in learning more? View {artist.name}'s Portfolio{' '}
            <a href={artist.portfolio}>Here</a>
          </h2>
        </div>
      </div>
      <ReviewPageForm addReview={addReview} selectedArtist={selectedArtist} authContext={user} />
      <div>
        {reviewList.map((review, idx) => (
          <div className="review-card" key={idx}>
            <p className="review-name">{review.user?.name} said:</p>
            <p>"{review.content}"</p>
            {canModifyReview(review.user?._id) && (
              <>
                <button className="delete" onClick={() => deleteReviewHandler(review._id)}>
                  Delete
                </button>
                <EditForm updateReview={updateReviewHandler} review={review} />
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
