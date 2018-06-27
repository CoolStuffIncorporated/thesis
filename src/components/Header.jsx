import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = (props) => {
  console.log('header props', props)
  if (props.navFlag === 'dashboard') {
    return (
      <header>
        <nav>
          <ul>
            <li><Link to='/'>home</Link></li>
            <li><Link to='/blogs'>blog posts</Link></li>
            <li><Link to='/photos_videos'>photos & videos</Link></li>
            <li><Link to='/destinations'>destinations</Link></li>
          </ul>
        </nav>
      </header>
    )
  }

  if (props.navFlag === 'countryOrCity') {
    return (
      <header>
        <nav>
          <ul>
            <li><Link to='/'>profile</Link></li>
            <li><Link to='/attractions'>attractions</Link></li>
            <li><Link to='/blogs'>blog posts</Link></li>
            <li><Link to='/photos_videos'>photos & videos</Link></li>
          </ul>
        </nav>
      </header>
    )
  }

}

export default Header
