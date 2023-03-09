import { useState } from 'react';

export default function ReviewPageForm() {
  return (
    <>
    <form>
      <label>
        Comment:
        <input type="text" />
      </label>
      <button type="submit">Submit</button>
    </form>
    </>
  )
}
