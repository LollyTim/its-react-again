
import { Link } from 'react-router-dom'

const Nav = ({search, setSearch}) => {
  return (
    <nav className='Nav'>
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search Post</label>
        <input value={search} onChange={(e) => setSearch(e.target.value)} id='search' type='text' placeholder='Search Post' />
      </form>
      <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to="/posts">Posts</Link></li>
        <li><Link to={'/about'}>About</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
