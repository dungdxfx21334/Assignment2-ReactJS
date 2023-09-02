// This custom hook is used to fetch data from the API because there would be a alot of duplicated codes if fetching
// is done for every gernes

import { useEffect, useState } from 'react'

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
