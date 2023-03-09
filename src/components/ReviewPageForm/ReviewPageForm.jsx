import { useState } from 'react';

export default function ReviewPageForm({ handleSubmit, edit, commentToEdit, handleCancelEdit }) {
  const [comment, setComment] = useState(edit ? commentToEdit.content : '');

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleFormSubmit = (event, ) => {
    event.preventDefault();
    handleSubmit(event, comment);
    setComment('');
  };

  const handleCancelClick = () => {
    if (edit) {
      handleCancelEdit();
    } else {
      setComment('');
    }
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <label>
          Comment:
          <input type="text" value={comment} onChange={handleCommentChange} />
        </label>
        <button type="submit">{edit ? 'Update' : 'Submit'}</button>
        {edit && <button type="button" onClick={handleCancelClick}>Cancel</button>}
      </form>
    </>
  );
}