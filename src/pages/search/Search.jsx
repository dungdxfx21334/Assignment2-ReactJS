import React from 'react';
import Navbar from '../browse/navbar/Navbar';
import SearchForm from './SearchForm/SearchForm';

const Search = () => {
  return (
    <div className="app">
      <Navbar></Navbar>
      <SearchForm></SearchForm>
    </div>
  );
};

export default Search;
