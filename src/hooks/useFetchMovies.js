// This custom hook is used to fetch data from the API because there would be a alot of duplicated codes if fetching
// is done for every gernes

import { useEffect, useState } from 'react'

const useFetchMovies = url => {
  const [moviesList, setMoviesList] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const fetchingData = async () => {
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error(response.status)
      }

      const data = await response.json()
      console.log(data)
      setMoviesList(data)
      setIsLoading(false)
    }

    fetchingData().catch(error => {
      console.log(error.message)
    })
  }, [url])
  return { moviesList, isLoading }
}

export default useFetchMovies
