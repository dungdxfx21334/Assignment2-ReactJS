import React, { useEffect, useState } from 'react'
import classes from './Navbar.module.css'
import SearchIcon from '../../search/SearchIcon'
function Navbar () {
  const [navbarChangeColor, setNavbarChangeColor] = useState(false)

  const scrollHandler = () => {
    if (window.scrollY >= 75) {
      setNavbarChangeColor(true)
    } else {
      setNavbarChangeColor(false)
    }
  }

  const navbarClasses = `${classes.navbar} ${
    navbarChangeColor ? classes.fill : ''
  }`

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  const navigateToHomeHandler = () => {
    window.location.assign('/')
  }

  const navigateToSearcPageHandler = () => {
    window.location.assign('/search')
  }

  return (
    <nav className={classes.container}>
      <ul className={navbarClasses}>
        <li className={classes.logo} onClick={navigateToHomeHandler}>
          <a href='/'>Movie App</a>
        </li>
        <li className={classes.search} onClick={navigateToSearcPageHandler}>
          <a href='/search'>
            <SearchIcon></SearchIcon>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
