// import ReviewPageForm from "../../components/ReviewPageForm/ReviewPageForm";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import * as artistsAPI from "../../utilities/artists-api";
import * as reviewsAPI from "../../utilities/reviews-api";
import ReviewPageForm from "../../components/ReviewPageForm/ReviewPageForm";
import EditForm from "../../components/EditForm/EditForm"
import './ArtistBioPage.css'
export default function ArtistBioPage({ useState, artists, user, deleteReview }) {
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
    console.log(newestReview)
    setReviewList([...reviewList, newestReview]);
  }

  async function updateReview(reviewId, newContent) {
    const artist = await reviewsAPI.updateReview(reviewId, newContent)
    console.log(artist)
    setArtist(artist) 
    setReviewList(artist.reviews)
  }

  async function deleteReview(reviewId) {
    await reviewsAPI.deleteReview(reviewId)
    const idx = reviewList.findIndex(review => review._id === reviewId)
    console.log(idx)
    const newReviewList = [...reviewList]
    newReviewList.splice(idx, 1)
    setReviewList(newReviewList)
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
          <div className="review-card">
            <p className="review-name">{user.name} said:</p>
            <p>"{review.content}"</p>
            <button className="delete" onClick={() => deleteReview(review._id)}>
            Delete
          </button> 
          <EditForm updateReview={updateReview} review={review}/>        
          </div>
        ))}
      </div>
    </>
  );
}