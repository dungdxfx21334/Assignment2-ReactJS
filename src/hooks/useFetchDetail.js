// This custom hook is used to fetch data from the API because there would be a alot of duplicated codes if fetching
// is done for every movies

import { useEffect, useState } from 'react'

const useFetchDetail = url => {
  const [detail, setDetail] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    const fetchingData = async () => {
      console.log(url)
      const response = await fetch(url)
      console.log(response)

      if (!response.ok) {
        throw new Error(response.status)
      }

      const data = await response.json()
      console.log(data)
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
