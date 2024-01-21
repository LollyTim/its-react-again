import React from 'react'

const SearchItem = () => {
  return (
    <div>
        <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search">Search</label>
            <input type="text" name="" id="search" role='searchbox' placeholder='Search for an item' />
            
        </form>
    </div>
  )
}

export default SearchItem