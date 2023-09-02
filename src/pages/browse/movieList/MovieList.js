import React from 'react'
import useFetchMovies from '../../../hooks/useFetchMovies'

import classes from './MovieList.module.css'

const MovieList = ({ searchPath, genre }) => {
  const url = `https://api.themoviedb.org/3${searchPath}`

  const { moviesList, isLoading } = useFetchMovies(url)

  if (isLoading) {
    // Making sure no code is executed before the movies are successfully retrieved
    return <p>Loading...</p>
  }

  const movieListRender = moviesList.results.map(movie => {
    const backdropPath = movie['backdrop_path']
    return (
      <li key={movie.id} className={classes.item}>
        <img
          className={classes.image}
          src={`https://image.tmdb.org/t/p/original${backdropPath}`}
          alt={movie.name}
        ></img>
      </li>
    )
  })

  return (
    <div className={classes.movieList}>
      <h1 className={classes.header}>{genre}</h1>
      <ul className={classes.container}>{movieListRender}</ul>
    </div>
  )
}
export default MovieList

// const movieEg = {
//   adult: false,
//   backdrop_path: '/pbrkL804c8yAv3zBZR4QPEafpAR.jpg',
//   belongs_to_collection: null,
//   budget: 165000000,
//   genres: [
//     { id: 12, name: 'Adventure' },
//     { id: 18, name: 'Drama' },
//     { id: 878, name: 'Science Fiction' }
//   ],
//   homepage: 'http://www.interstellarmovie.net/',
//   id: 157336,
//   imdb_id: 'tt0816692',
//   original_language: 'en',
//   original_title: 'Interstellar',
//   overview:
//     'The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.',
//   popularity: 148.798,
//   poster_path: '/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
//   production_companies: [
//     {
//       id: 923,
//       logo_path: '/5UQsZrfbfG2dYJbx8DxfoTr2Bvu.png',
//       name: 'Legendary Pictures',
//       origin_country: 'US'
//     },
//     {
//       id: 9996,
//       logo_path: '/3tvBqYsBhxWeHlu62SIJ1el93O7.png',
//       name: 'Syncopy',
//       origin_country: 'GB'
//     },
//     {
//       id: 13769,
//       logo_path: null,
//       name: 'Lynda Obst Productions',
//       origin_country: ''
//     }
//   ],
//   production_countries: [
//     { iso_3166_1: 'GB', name: 'United Kingdom' },
//     { iso_3166_1: 'US', name: 'United States of America' }
//   ],
//   release_date: '2014-11-05',
//   revenue: 701729206,
//   runtime: 169,
//   spoken_languages: [
//     { english_name: 'English', iso_639_1: 'en', name: 'English' }
//   ],
//   status: 'Released',
//   tagline: 'Mankind was born on Earth. It was never meant to die here.',
//   title: 'Interstellar',
//   video: false,
//   vote_average: 8.414,
//   vote_count: 32349
// }

// const movieEg2 = {
//   id: 157336,
//   results: [
//     {
//       iso_639_1: 'en',
//       iso_3166_1: 'US',
//       name: 'INTERSTELLAR - Own it TODAY on Blu-ray and DIGITAL HD!',
//       key: 'KlyknsTJk0w',
//       published_at: '2015-03-20T21:10:51.000Z',
//       site: 'YouTube',
//       size: 1080,
//       type: 'Teaser',
//       official: true,
//       id: '57817ab4c3a36813870024b7'
//     },
//     {
//       iso_639_1: 'en',
//       iso_3166_1: 'US',
//       name: 'Interstellar – Building A Black Hole – Official Warner Bros.',
//       key: 'MfGfZwQ_qaY',
//       site: 'YouTube',
//       size: 1080,
//       type: 'Featurette',
//       official: true,
//       published_at: '2014-10-24T12:59:28.000Z',
//       id: '5db465f6f056d500180e96ff'
//     },
//     {
//       iso_639_1: 'en',
//       iso_3166_1: 'US',
//       name: 'Interstellar Movie - Official Trailer 3',
//       key: '0vxOhd4qlnA',
//       published_at: '2014-10-01T21:37:54.000Z',
//       site: 'YouTube',
//       size: 1080,
//       type: 'Trailer',
//       official: false,
//       id: '57817accc3a368592500392e'
//     },
//     {
//       iso_639_1: 'en',
//       iso_3166_1: 'US',
//       name: 'Interstellar – Trailer 4 – Official Warner Bros.',
//       key: 'LY19rHKAaAg',
//       published_at: '2014-10-01T19:00:20.000Z',
//       site: 'YouTube',
//       size: 1080,
//       type: 'Trailer',
//       official: true,
//       id: '57817b0fc3a368592500394d'
//     },
//     {
//       iso_639_1: 'en',
//       iso_3166_1: 'US',
//       name: 'Interstellar Movie - Official Trailer 2',
//       key: 'Rt2LHkSwdPQ',
//       published_at: '2014-07-31T23:00:58.000Z',
//       site: 'YouTube',
//       size: 1080,
//       type: 'Trailer',
//       official: false,
//       id: '5795006f92514142390035ae'
//     },
//     {
//       iso_639_1: 'en',
//       iso_3166_1: 'US',
//       name: 'Interstellar – Trailer 3 – Official Warner Bros.',
//       key: 'ePbKGoIGAXY',
//       published_at: '2014-07-31T23:00:27.000Z',
//       site: 'YouTube',
//       size: 1080,
//       type: 'Trailer',
//       official: true,
//       id: '5add84850e0a2608d8009256'
//     },
//     {
//       iso_639_1: 'en',
//       iso_3166_1: 'US',
//       name: 'Interstellar Movie - Official Trailer',
//       key: '2LqzF5WauAw',
//       published_at: '2014-05-16T17:56:42.000Z',
//       site: 'YouTube',
//       size: 1080,
//       type: 'Trailer',
//       official: false,
//       id: '5794fffbc3a36829ab00056f'
//     },
//     {
//       iso_639_1: 'en',
//       iso_3166_1: 'US',
//       name: 'Interstellar - Trailer - Official Warner Bros. UK',
//       key: 'zSWdZVtXT7E',
//       published_at: '2014-05-16T17:00:22.000Z',
//       site: 'YouTube',
//       size: 1080,
//       type: 'Trailer',
//       official: true,
//       id: '57817aa69251417bfc000a58'
//     },
//     {
//       iso_639_1: 'en',
//       iso_3166_1: 'US',
//       name: 'Interstellar Movie - Official Teaser',
//       key: 'nyc6RJEEe0U',
//       published_at: '2013-12-14T16:07:52.000Z',
//       site: 'YouTube',
//       size: 1080,
//       type: 'Trailer',
//       official: false,
//       id: '57817a91c3a36873ea000adf'
//     },
//     {
//       iso_639_1: 'en',
//       iso_3166_1: 'US',
//       name: 'Interstellar - Teaser Trailer - Official Warner Bros. UK',
//       key: '827FNDpQWrQ',
//       published_at: '2013-12-14T16:00:10.000Z',
//       site: 'YouTube',
//       size: 1080,
//       type: 'Trailer',
//       official: true,
//       id: '57817ada9251417c28000b02'
//     }
//   ]
// }
