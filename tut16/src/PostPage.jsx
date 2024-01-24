import React from 'react'
import { useParams, Link } from 'react-router-dom'

const PostPage = ({posts, handleDelete}) => {
  const { id } = useParams();
  const post = posts.find(post => (post.id).toString() === id);
  return (
    <main>
        <article className='PostPage'>
          {post && 
            <>
              <h2>{post.title}</h2>
              <p className='postDate'>{post.datetime}</p>
              <p className='postBody'>{post.body}</p>
              <button className='' onClick={() => handleDelete(post.id)}>
                Delete Post
              </button>
            </>
          }
        </article>
    </main>
  )
}

export default PostPage