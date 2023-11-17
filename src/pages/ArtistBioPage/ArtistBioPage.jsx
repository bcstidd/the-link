import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as artistsAPI from '../../utilities/artists-api';
import * as reviewsAPI from '../../utilities/reviews-api';
import ReviewPageForm from '../../components/ReviewPageForm/ReviewPageForm';
import EditForm from '../../components/EditForm/EditForm';
import './ArtistBioPage.css';

export default function ArtistBioPage({ user, deleteReview }) {
  const [reviewList, setReviewList] = useState([]);
  const { selectedArtist } = useParams();
  const [artist, setArtist] = useState({});

  useEffect(() => {
    async function getArtist() {
      try {
        let fetchedArtist = await artistsAPI.getOneArtist(selectedArtist);
        setArtist(fetchedArtist);
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
        setReviewList(artist.reviews);
      } catch (error) {
        console.error('Error fetching artist data:', error);
      }
    }
    getMyData();
  }, [selectedArtist]);


  useEffect(function () {
    async function getMyData() {
      try {
        const artist = await artistsAPI.getOneArtist(selectedArtist);
        setReviewList(artist.reviews);
        console.log('Fetched Reviews:', artist.reviews);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    }
    getMyData();
  }, [selectedArtist]);

  async function addReview(newReview, newForm) {
    try {
      const newestReview = await reviewsAPI.addReview(newReview, newForm);
      console.log('Newest Review:', newestReview);
      setReviewList([...reviewList, newestReview]);
    } catch (error) {
      console.error('Error adding review:', error);
    }
  }

  async function updateReview(reviewId, newContent) {
    try {
      const updatedArtist = await reviewsAPI.updateReview(reviewId, newContent);
      console.log('Updated Artist:', updatedArtist);
      setArtist(updatedArtist);
      setReviewList(updatedArtist.reviews);
    } catch (error) {
      console.error('Error updating review:', error);
    }
  }

  async function deleteReview(reviewId) {
    try {
      await reviewsAPI.deleteReview(reviewId);
      const idx = reviewList.findIndex(review => review._id === reviewId);
      console.log('Deleted Review Index:', idx);
      const newReviewList = [...reviewList];
      newReviewList.splice(idx, 1);
      setReviewList(newReviewList);
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  }

  return (
    <>
      <h1 className="artist-name">{artist.name}</h1>
      <div className="bio-page">
        <h3>{artist.shop}</h3>
        <img id="bio-photo" src={artist.photo} alt="" />
        <div>
          <h2>
            Interested in learning more? View {artist.name}'s Portfolio{" "}
            <a href={artist.portfolio}>Here</a>
          </h2>
        </div>
      </div>
      <ReviewPageForm addReview={addReview} selectedArtist={selectedArtist} />
      <div>
        {reviewList.map((review, idx) => (
          <div className="review-card" key={idx}>
            <p className="review-name">{user.name} said:</p>
            <p>"{review.content}"</p>
            <button className="delete" onClick={() => deleteReview(review._id)}>
              Delete
            </button>
            <EditForm updateReview={updateReview} review={review} />
          </div>
        ))}
      </div>
    </>
  );
}
