import React from 'react';
import Navbar from './navbar/Navbar';
import classes from './Browse.module.css';
import Banner from './banner/Banner';
import ApiContextProvider from '../../context/ApiContextProvider';
import Original from './original/Original';
import MovieList from './movieList/MovieList';
import { ApiKeyContext } from '../../context/api-context';
import { useContext } from 'react';

function Browse() {
  const API_KEY = useContext(ApiKeyContext).API_KEY;
  return (
    <ApiContextProvider>
      <div className={classes.browse}>
        <Navbar></Navbar>
        <Banner></Banner>
        <Original></Original>
        <MovieList
          searchPath={`/trending/all/week?api_key=${API_KEY}&language=en-US`}
          genre="Xu hướng"></MovieList>
        <MovieList
          searchPath={`/movie/top_rated?api_key=${API_KEY}&language=en-US`}
          genre="Xếp hạng cao"></MovieList>
        <MovieList
          searchPath={`/discover/movie?api_key=${API_KEY}&with_genres=28`}
          genre="Hành động"></MovieList>
        <MovieList
          searchPath={`/discover/movie?api_key=${API_KEY}&with_genres=35`}
          genre="Hài"></MovieList>
        <MovieList
          searchPath={`/discover/movie?api_key=${API_KEY}&with_genres=27`}
          genre="Kinh dị"></MovieList>
        <MovieList
          searchPath={`/discover/movie?api_key=${API_KEY}&with_genres=10749`}
          genre="Lãng mạn"></MovieList>
        <MovieList
          searchPath={`/discover/movie?api_key=${API_KEY}&with_genres=99`}
          genre="Tài liệu"></MovieList>
      </div>
    </ApiContextProvider>
  );
}

export default Browse;
