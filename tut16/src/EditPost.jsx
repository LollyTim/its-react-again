import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const EditPost = ({ posts, handleEdit, editTitle, setEditTitle, editBody, setEditBody }) => {
  const { id } = useParams();
  const post = posts && posts.find((post) => post.id === id);

  useEffect(() => {
    post && setEditBody(post.body) && setEditTitle(post.title);
  }, [post, setEditBody, setEditTitle]);

  return (
    <main className='NewPost'>
      {editTitle && (
        <>
          <h2>Edit Post</h2>
          <form className='newPostForm' onSubmit={(e) => e.preventDefault()}>
            <label htmlFor='editTitle'>Title:</label>
            <input
              id='editTitle'
              type='text'
              required
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <label htmlFor='editBody'>Post:</label>
            <textarea
              id='editBody'
              required
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
            />
            <button type='submit' onClick={() => handleEdit(post.id)}>Submit</button>
          </form>
        </>
      )}
      {!editTitle && (
        <>
          <h2>Post Not Found</h2>
          <p>Well, that's disappointing.</p>
          <p>
            <Link to={'/'}>Visit Our Home Page</Link>
          </p>
        </>
      )}
    </main>
  );
};

export default EditPost;
