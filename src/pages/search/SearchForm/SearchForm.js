import React from 'react'
import SearchIcon from '../SearchIcon'

import Button from '../../../UI/Button'
import classes from './SearchForm.module.css'
const SearchForm = () => {
  return (
    <form className={classes.form}>
      <div className={classes.searchInput}>
        <input type='text'></input>
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
  )
}

export default SearchForm
