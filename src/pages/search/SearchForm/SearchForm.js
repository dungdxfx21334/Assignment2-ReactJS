import React from 'react'
import SearchIcon from '../SearchIcon'

import Button from '../../../UI/Button'
import classes from './SearchForm.module.css'
import { useRef } from 'react'
import { useContext } from 'react'
import { ApiKeyContext } from '../../../context/api-context'
import { useState } from 'react'
import ModalContextProvider from '../../../context/ModalContextProvider'

import ResultList from '../result/ResultList'
const SearchForm = () => {
  const inputSearchRef = useRef()
  const API_KEY = useContext(ApiKeyContext).API_KEY
  const [showResult, setShowResult] = useState(false)
  const [resultList, setResultList] = useState([])

  const searchHandler = async event => {
    event.preventDefault()
    try {
      console.log(inputSearchRef)
      const url = `https://api.themoviedb.org/3/search/movie?query=${inputSearchRef.current.value}&api_key=${API_KEY}&language=en-US`
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('No moives found')
      }
      const data = await response.json()
      console.log(data)
      setResultList(data)
      setShowResult(true)
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <ModalContextProvider>
      <form className={classes.form} onSubmit={searchHandler}>
        <div className={classes.searchInput}>
          <input type='text' ref={inputSearchRef}></input>
          <span className={classes.icon}>
            <SearchIcon></SearchIcon>
          </span>
        </div>

        <div className={classes.btnGroup}>
          <Button type='button' className={classes.btnCancel}>
            Cancel
          </Button>
          <Button type='submit' className={classes.btnSearch}>
            Search
          </Button>
        </div>
      </form>
      {showResult && <ResultList resultList={resultList}></ResultList>}
    </ModalContextProvider>
  )
}

export default SearchForm
