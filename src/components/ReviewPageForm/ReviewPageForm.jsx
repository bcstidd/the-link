import { useState } from 'react';

export default function ReviewPageForm({ handleSubmit }) {
  const [comment, setComment] = useState('');

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit(comment);
    setComment('');
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <label>
          Comment:
          <input type="text" value={comment} onChange={handleCommentChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
