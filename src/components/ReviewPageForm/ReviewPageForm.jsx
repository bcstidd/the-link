import { useState } from "react";
import './ReviewPageForm.css'

export default function ReviewPageForm({ addReview, selectedArtist }) {
  const [reviewForm, setReviewForm] = useState({
    content: "",
  });
  async function handleSubmit(evt) {
    evt.preventDefault();
    addReview(selectedArtist, reviewForm);
    setReviewForm({
      content: "",
    });
  }
  function handleChange(evt) {
    let newReviewForm = {
      ...reviewForm,
      [evt.target.name]: evt.target.value,
    };
    setReviewForm(newReviewForm);
  }
  return (
    <>
      <h4 className="review">What people say about them:</h4>
      <form onSubmit={handleSubmit}>
        <label>Review:</label>
        <input
          type="text"
          name="content"
          value={reviewForm.content}
          onChange={handleChange}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
