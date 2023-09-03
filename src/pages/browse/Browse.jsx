import React from 'react';
import Navbar from './navbar/Navbar';
import classes from './Browse.module.css';
import Banner from './banner/Banner';
import ApiContextProvider from '../../context/ApiContextProvider';
import Original from './original/Original';
import MovieList from './movieList/MovieList';
import { ApiKeyContext } from '../../context/api-context';
import { useContext } from 'react';
import MovieDetailContextProvider from '../../context/MovieDetailContextProvider';

/* NOTE: CLICK ON ONE MOVIE AND GET BACK INFORMATION OF ANOTHER MOVIE
There are problems with the data the API give back. 
For example after using the link: 
https://api.themoviedb.org/3/discover/tv?api_key=7cfd9d81abbc2ae25775d517ea6c0dd5&with_network=123
to query the netflix originals. I get back a list of 20 movies and their details. But the ids included
in those movies details are not what represent them on the database. For example with this movie detail 
{
    "backdrop_path": "/9xxLWtnFxkpJ2h1uthpvCRK6vta.jpg",
    "first_air_date": "1999-09-20",
    "genre_ids": [
        80,
        18,
        9648
    ],
    "id": 2734,
    "name": "Law & Order: Special Victims Unit",
    "origin_country": [
        "US"
    ],
    "original_language": "en",
    "original_name": "Law & Order: Special Victims Unit",
    "overview": "In the criminal justice system, sexually-based offenses are considered especially heinous. In New York City, the dedicated detectives who investigate these vicious felonies are members of an elite squad known as the Special Victims Unit. These are their stories.",
    "popularity": 6666.037,
    "poster_path": "/ywBt4WKADdMVgxTR1rS2uFwMYTH.jpg",
    "vote_average": 8,
    "vote_count": 3357

}
with the id of 2734, I used this link:
https://api.themoviedb.org/3/movie/2734?api_key=7cfd9d81abbc2ae25775d517ea6c0dd5&append_to_response=videos 
to retrieve its further details and this is what I got back:
{
  "adult": false,
  "backdrop_path": "/yN2xzfoy6JoyjVgmjyqt3sLGV9.jpg",
  "belongs_to_collection": {
    "id": 1070399,
    "name": "The Bible Collection",
    "poster_path": "/lug8SC0acLYmSMJazoO5yjYot2a.jpg",
    "backdrop_path": null
  },
  "budget": 15000000,
  "genres": [
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 12,
      "name": "Adventure"
    }
  ],
  "homepage": "",
  "id": 2734,
  "imdb_id": "tt0118933",
  "original_language": "en",
  "original_title": "David",
  "overview": "A distinguished military leader whose reign was touched by great scandal, shocking betrayals and rousing victories. A simple shepherd boy chosen to be king, under the watchful eyes of prophet Samuel.",
  "popularity": 5.491,
  "poster_path": "/PZZEIftzyQpqn1BoAXfX3B6l9B.jpg",
  "production_companies": [
    {
      "id": 678,
      "logo_path": "/AbIc38dGx4b8dhKS7oeRL6aXFDv.png",
      "name": "Turner Network Television",
      "origin_country": "US"
    },
    {
      "id": 974,
      "logo_path": null,
      "name": "Five Mile River Films",
      "origin_country": ""
    },
    {
      "id": 1080,
      "logo_path": "/6bZ0BiLDzCZSqVCjiSqweWwp9Ew.png",
      "name": "Beta Film",
      "origin_country": "DE"
    },
    {
      "id": 1082,
      "logo_path": "/lEvojpyYkqD9W8mIEH5LB1cft2q.png",
      "name": "Lux Vide",
      "origin_country": "IT"
    }
  ],
  "production_countries": [
    {
      "iso_3166_1": "DE",
      "name": "Germany"
    },
    {
      "iso_3166_1": "IT",
      "name": "Italy"
    },
    {
      "iso_3166_1": "US",
      "name": "United States of America"
    }
  ],
  "release_date": "1997-03-23",
  "revenue": 0,
  "runtime": 190,
  "spoken_languages": [
    {
      "english_name": "German",
      "iso_639_1": "de",
      "name": "Deutsch"
    },
    {
      "english_name": "English",
      "iso_639_1": "en",
      "name": "English"
    }
  ],
  "status": "Released",
  "tagline": "",
  "title": "David",
  "video": false,
  "vote_average": 7.286,
  "vote_count": 35,
  "videos": {
    "results": []
  }
}
  . A completely different movie with different title and poster, backdrop. I haved tested thoroughly 
  and deduced that this is the server's mistake and that's why when click on one movie, we get back information
  of another movie.
*/

function Browse() {
  const API_KEY = useContext(ApiKeyContext).API_KEY;

  return (
    <MovieDetailContextProvider>
      <ApiContextProvider>
        <div className={classes.browse}>
          <Navbar></Navbar>
          <Banner></Banner>
          <Original genre="Original"></Original>
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
    </MovieDetailContextProvider>
  );
}

export default Browse;
