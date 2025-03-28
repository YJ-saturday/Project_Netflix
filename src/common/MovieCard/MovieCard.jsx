import React from 'react';
import './MovieCard.style.css';
import { Badge } from 'react-bootstrap';
import AllIcon from '../../img/AllIcon.svg';
import { useMovieGenerQuery } from '../../hooks/useMovieGenre';

const MovieCard = ({ movie }) => {
  const { data: genreData } = useMovieGenerQuery();

  const showGenre = (genreIdList) => {
    if (!genreData) return [];
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj.name;
    });

    return genreNameList;
  };
  return (
    <div
      style={{
        backgroundImage:
          'url(' +
          `https://media.themoviedb.org/t/p/w440_and_h660_face${movie.poster_path}` +
          ')',
      }}
      className="movie-card"
    >
      <div className="overlay">
        <h1>{movie.title}</h1>
        <div className="genre">
          {showGenre(movie.genre_ids).map((genre, index) => (
            <Badge bg="danger" key={index}>
              {genre}
            </Badge>
          ))}
        </div>
        <div className="movie-details">
          <div>
            ⭐ <span>{movie.vote_average}</span>
          </div>
          <div>
            🔥 <span>{movie.popularity}</span>
          </div>
          <div>
            {movie.adult ? '🔞' : <img src={AllIcon} alt="ALL" width="20" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
