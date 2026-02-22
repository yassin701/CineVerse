import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const searchQuery = searchParams.get('search') || ''

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSearchChange = (e) => {
    const value = e.target.value
    if (value) {
      setSearchParams({ search: value })
      // Redirect to home if searching from another page
      if (window.location.pathname !== '/') {
        navigate(`/?search=${encodeURIComponent(value)}`)
      }
    } else {
      searchParams.delete('search')
      setSearchParams(searchParams)
    }
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-left-group" style={{ display: 'flex', alignItems: 'center', gap: '50px' }}>
        <div className="logo">
          <Link to="/">CINEVERSE</Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/?type=TV Show">TV Shows</Link></li>
          <li><Link to="/?type=Movie">Movies</Link></li>
          <li><Link to="/?filter=popular">New & Popular</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      <div className="nav-right">
        <div className="search-box">
          <input
            type="text"
            placeholder="Titles, people, genres"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="search-icon"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </div>
        <div className="user-icon" style={{ cursor: 'pointer' }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="User" style={{ width: '32px', borderRadius: '4px' }} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
