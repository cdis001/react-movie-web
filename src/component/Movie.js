import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './Movie.css'

const Movie = ({ id, year, title, summary, poster, genres, rating }) => {
  return (
    // <Link
    //   to={{
    //     pathname: `/movie/${id}`,
    //     state: {
    //       id,
    //       year,
    //       title,
    //       summary,
    //       poster,
    //       genres
    //     }
    //   }}
    // >
    // </Link>
    <div className="movie">
      <img className="movie__image" src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title" title={title}>
          {title}
        </h3>
        <h5 className="movie__year">YEAR</h5>
        <h4 className="movie__year_data">{year}</h4>
        <h5 className="movie__rating">RATING</h5>
        <h4 className="movie__rating_data">{rating}</h4>
        <ul className="movie__genres">
          {genres.map((genre, index) => (
            <li className="genres__genre" key={index}>
              {genre}
            </li>
          ))}
        </ul>
        {/* <p className="movie__summary">{summary.slice(0, 150)}</p> */}
      </div>
    </div>
  )
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie
