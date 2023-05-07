import { useState } from 'react'
import { useNavigate } from 'react-router'
import './HeroBanner.scss'

const HeroBanner = () => {

  const [background, setBackground] = useState('')
  const  [query, setQuery]= useState('')

  const navigate = useNavigate()

  const changeQueryHandler = (e) => {
    setQuery(e.target.value)
  }

  const searchQueryHandler = (event) => {
    if(event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`)
    }
  }

  return (
    <div className='heroBanner'>
      <div className="wrapper">
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="title">Million of movies, TV shows and people to discover.
          Explore now.</span>
          <div className="searchInput">
            <input type="text" placeholder="Search for a movie or tv show..."
            onKeyUp={searchQueryHandler}
            onChange={changeQueryHandler}
            />
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner