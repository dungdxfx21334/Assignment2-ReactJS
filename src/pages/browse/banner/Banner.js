import useFetchMovies from '../../../hooks/useFetchMovies'
import { ApiKeyContext } from '../../../context/api-context'
import { useContext } from 'react'
import React from 'react'

const Banner = () => {
  const API_KEY = useContext(ApiKeyContext).API_KEY
  const url = `https://api.themoviedb.org/3//discover/tv?api_key=${API_KEY}&with_network=123`

  const moviesList = useFetchMovies(url)
  console.log(moviesList)
  return <></>
}

export default Banner
// `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
