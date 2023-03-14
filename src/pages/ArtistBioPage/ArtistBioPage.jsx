// import ReviewPageForm from "../../components/ReviewPageForm/ReviewPageForm";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import * as artistsAPI from "../../utilities/artists-api";
import * as reviewsAPI from "../../utilities/reviews-api";
import ReviewPageForm from "../../components/ReviewPageForm/ReviewPageForm";

export default function ArtistBioPage({ useState, artists, user }) {
  const [reviews, setReviews] = useState("");
  const [reviewList, setReviewList] = useState([]);
  let { selectedArtist } = useParams();

  let [artist, setArtist] = useState({});

  useEffect(
    function () {
      async function getArtist() {
        let artist = await artistsAPI.getOneArtist(selectedArtist);
        setArtist(artist);
      }
      getArtist();
    },
    [selectedArtist]
  );

  useEffect(function () {
    async function getMyData() {
      const artist = await artistsAPI.getOneArtist(selectedArtist);
      setReviewList(artist.reviews);
    }
    getMyData();
  }, []);

  async function addReview(newReview, newForm) {
    const newestReview = await reviewsAPI.addReview(newReview, newForm);
    const arraylength = reviews.length;
    const lastReview = newestReview.reviews[arraylength];
    setReviews([...reviews, lastReview]);
  }

  return (
    <>
      <h1>Bio page</h1>
      <div className="bio-page">
        <h2>{artist.name}</h2>
        <h3>{artist.shop}</h3>
        <img src={artist.photo} alt="" />
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
          <div>
            <p>{review.content}</p>
            <p>{user.name}</p>
          </div>
        ))}
      </div>

      {/* <div className="bio-page">
        <h2>{artist.name}</h2>
        <h3>{artist.shop}</h3>
        <h3>Specializes in {artist.style.join(", ")}</h3>
        <img src={artist.photo} alt="" />
        <div>
          <h2>
            Interested in learning more? View {artist.name}'s Portfolio{" "}
            <a href={artist.portfolio}>Here</a>
          </h2>
          <h2>Reviews</h2>
          <div className="review-card">
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <div key={index}>
                  <p>{review.user.name} says:</p>
                  {review.editing ? (
                    <form
                      onSubmit={(event) =>
                        handleEdit(event, index, review.content)
                      }
                    >
                      <label>
                        Edit your review:
                        <input type="text" defaultValue={review.content} />
                      </label>
                      <button type="submit">Update</button>
                      <button onClick={(event) => handleDelete(event, index)}>
                        Delete
                      </button>
                    </form>
                  ) : (
                    <div>
                      <p>{review.content}</p>
                      {user && review.user.id === user.id && (
                        <div>
                          <button
                            onClick={() => {
                              const newReviews = [...reviews];
                              newReviews[index] = { ...review, editing: true };
                              setReviews(newReviews);
                            }}
                          >
                            Edit
                          </button>
                          <button
                            onClick={(event) => handleDelete(event, index)}
                          >
                            Delete
                          </button>
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
          <ReviewPageForm addReview={addReview} />
        </div>
      </div> */}
    </>
  );
}
