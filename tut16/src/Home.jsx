import React from 'react'
import Feed from './Feed'

const Home = ({posts, isLoading, fetchError}) => {
  return (
    <main className='Home'>
      {
        isLoading && 
        <main className='loader'>
          <h2 className='animated-bg'></h2>
          <p className='animated-bg-text'></p>
          <p className='animated-bg-text2'></p>
          <br />
          {/* <br /> */}
          <h2 className='animated-bg'></h2>
          <p className='animated-bg-text'></p>
          <p className='animated-bg-text2'></p>
          <br />
          <br />
          <h2 className='animated-bg'></h2>
          <p className='animated-bg-text'></p>
          <p className='animated-bg-text2'></p>
          
        </main>
      }
      {
        fetchError && <p className='statusMsg' style={{color: 'red'}}>{fetchError.message}</p>
      }
      {
        !isLoading && !fetchError && (posts.length ? <Feed posts={posts} /> : <p className='ststusMsg'>No posts to display.</p>)
      }
    </main>
  )
}

export default Home