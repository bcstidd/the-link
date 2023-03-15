import "./EditForm.css"
import {useState} from 'react'

export default function EditForm({review, updateReview}) {
    const [formData, setFormData] = useState({
        content: review.content,
      });

      function handleChange(evt) {
        setFormData({
            ...formData, 
            [evt.target.name]: evt.target.value
        })
      }

      async function handleSubmit(evt) {
        evt.preventDefault()
        await updateReview(review._id, formData)
        setFormData({content: review.content})
      }

      return(
      <>
        <form className="edit" onSubmit={handleSubmit}>
            <input name='content' type='text' value={formData.content} onChange={handleChange}/>
            <button type="submit">Change</button> 
        </form>
      </>
    )
}
