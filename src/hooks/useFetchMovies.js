import { useEffect, useState } from 'react'

// `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
const useFetchMovies = url => {
  const [moviesList, setMoviesList] = useState([])
  useEffect(() => {
    const fetchingData = async () => {
      const response = await fetch(url)
      console.log(response)
      const data = await response.json()
      console.log(data)
      setMoviesList(data)
    }

    fetchingData().catch(error => {
      console.log(error.message)
    })
  }, [url])
  return moviesList
}

export default useFetchMovies
