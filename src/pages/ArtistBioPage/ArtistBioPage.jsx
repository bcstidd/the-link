import { useParams } from 'react-router-dom';
import { useState } from 'react';
import ReviewPageForm from '../../components/ReviewPageForm/ReviewPageForm';

export default function ArtistBioPage({ artists, user }) {
  const { name } = useParams();
  const artist = artists.find(artist => artist.name === name);
  const [reviews, setReviews] = useState(artist.reviews);

  const handleSubmit = (event, content) => {
    event.preventDefault();
    const newReview = {
      user: user,
      content: content,
    };
    setReviews([...reviews, newReview]);
  };

  const handleEdit = (event, index, content) => {
    event.preventDefault();
    const editedReview = {
      ...reviews[index],
      content: content,
    };
    const newReviews = [...reviews];
    newReviews[index] = editedReview;
    setReviews(newReviews);
  };

  const handleDelete = (event, index) => {
    event.preventDefault();
    const newReviews = reviews.filter((_, i) => i !== index);
    setReviews(newReviews);
  };

  return (
    <>
      <div className="bio-page">
        <h2>{artist.name}</h2>
        <h3>{artist.shop}</h3>
        <h3>Specializes in {artist.style.join(', ')}</h3>
        <img src={artist.photo} alt="" />
        <div>
        <h2>
          Interested in learning more? View {artist.name}'s Portfolio{' '}
          <a href={artist.portfolio}>Here</a>
        </h2>
          <h2>Reviews</h2>
          <div className='review-card'>
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <div key={index}>
                  <p>{review.user.name} says:</p>
                  {review.editing ? (
                    <form onSubmit={(event) => handleEdit(event, index, review.content)}>
                      <label>
                        Edit your review:
                        <input type="text" defaultValue={review.content} />
                      </label>
                      <button type="submit">Update</button>
                      <button onClick={(event) => handleDelete(event, index)}>Delete</button>
                    </form>
                  ) : (
                    <div>
                      <p>{review.content}</p>
                      {user && review.user.id === user.id && (
                        <div>
                          <button onClick={() => {
                            const newReviews = [...reviews];
                            newReviews[index] = { ...review, editing: true };
                            setReviews(newReviews);
                          }}>Edit</button>
                          <button onClick={(event) => handleDelete(event, index)}>Delete</button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p>No Reviews Yet</p>
            )}
          </div>
          <ReviewPageForm handleSubmit={handleSubmit} />
        </div>
      </div>
    </>
  );
}
