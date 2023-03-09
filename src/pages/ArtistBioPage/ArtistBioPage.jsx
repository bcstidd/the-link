import { useParams } from 'react-router-dom';
import { useState } from 'react';
import ReviewPageForm from '../../components/ReviewPageForm/ReviewPageForm';

export default function ArtistBioPage({ artists, user }) {
  const { name } = useParams();
  const artist = artists.find(artist => artist.name === name);
  const [reviews, setReviews] = useState(artist.reviews);

  const handleSubmit = (comment) => {
    const newReview = {
      user: user,
      content: comment,
    };
    setReviews([...reviews, newReview]);
  };

  return (
    <div>
      <div className="bio-page">
        <h2>{artist.name}</h2>
        <h3>{artist.shop}</h3>
        <h3>Specializes in {artist.style.join(', ')}</h3> 
        <img src={artist.photo} alt=""/>
        <div>
          <h2>Reviews</h2>
          {reviews.length > 0 ? (  
            reviews.map((review, index) => (
              <div key={index}>
                <p> {review.user.name}:</p>
                <p> {review.content}</p>
              </div>
            ))
          ) : (
            <p>No Reviews Yet</p>
          )}
          <ReviewPageForm handleSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}