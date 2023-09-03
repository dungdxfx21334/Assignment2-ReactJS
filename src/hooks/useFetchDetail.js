// This custom hook is used to fetch data from the API because there would be a alot of duplicated codes if fetching
// is done for every movies

// Side notes: This hook and the hook useFetchMovies basically do the same thing and can remove one of them. A little
// bit of effort in refactoring so I'm gonna leave it like this.
import { useEffect, useState } from 'react'

const useFetchDetail = url => {
  const [detail, setDetail] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    const fetchingData = async () => {
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error(response.status)
      }

      const data = await response.json()
      setDetail(data)
      setIsLoading(false)
    }

    fetchingData().catch(error => {
      console.log(error.message)
    })
  }, [url])
  return { detail, isLoading }
}

export default useFetchDetail
