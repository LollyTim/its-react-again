import React from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const EditPost = ({
    post, handleEdit, editBody, setEditBody, editTitle, setEditTitle
}) => {
    const {id} = useParams();
    const post = posts.find(post => (post.id).toString() === id);

    useEffect(() => {
        post && setEditBody(post.body) && setEditTitle(post.title)
    }, [post, setEditBody, setEditBody])
  return (
    <main className='NewPost'>
        {editTitle && <>
      <h2>Edit Post</h2>
      <form className='newPostForm' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="editTitle">Title:</label>
        <input id='editTitle'
          type='text'
          required
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          />
          <label htmlFor="editBody">Post:</label>
          <textarea
          id='editBody'
          required
          value={editBody}
          onChange={(e) => setEditBody(e.target.value)}
          />
          <button type='submit'>Submit</button>
      </form>
      </>}
    </main>
  )
}

export default EditPost