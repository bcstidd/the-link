import { useState } from 'react';

export default function ReviewPageForm(addReview) {
  const [reviewForm, setReviewForm] = useState ({ 
    content: ''
   })
  async function handleSubmit(evt) {
    evt.preventDefault()
    addReview(selectedArtist, reviewData)
    setReviewForm( {content: ''} )
  } 
  function handleChange(evt){
    let newReviewForm = {...reviewForm, 
      [evt.target.content]: evt.target.value }
      setReviewForm(newReviewForm)
    } 
    return (
      <form onSubmit={handleSubmit}>
        <label>Reviews</label><input type='text' name='content' value={reviewForm.content} onChange={handleChange}></input>
        <button type='submit'>Submit</button>
      </form>
      )
  }

// export default function ReviewPageForm({ handleSubmit, edit, commentToEdit, handleCancelEdit }) {
//   const [comment, setComment] = useState(edit ? commentToEdit.content : '');

//   const handleCommentChange = (event) => {
//     setComment(event.target.value);
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     handleSubmit(event, comment);
//     setComment('');
//   };

//   const handleCancelClick = () => {
//     if (edit) {
//       handleCancelEdit();
//     } else {
//       setComment('');
//     }
//   };

//   return (
//     <>
//       <form onSubmit={handleFormSubmit}>
//         <label>
//           Comment:
//           <input type="text" value={comment} onChange={handleCommentChange} />
//         </label>
//         <button type="submit">{edit ? 'Update' : 'Submit'}</button>
//         {edit && <button type="button" onClick={handleCancelClick}>Cancel</button>}
//       </form>
//     </>
//   );
// }
