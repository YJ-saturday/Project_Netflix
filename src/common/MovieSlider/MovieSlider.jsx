import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../MovieCard/MovieCard';
import './MovieSlider.style.css';

const CustomLeftArrow = ({ onClick }) => {
  return (
    <button className="custom-arrow custom-left-arrow" onClick={onClick}>
      &lt;
    </button>
  );
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <button className="custom-arrow custom-right-arrow" onClick={onClick}>
      &gt;
    </button>
  );
};

const MovieSlider = ({ title, movies, responsive }) => {
  return (
    <div className="main">
      <h3>{title}</h3>
      <Carousel
        infinite={true}
        centerMode={false}
        itemClass="movie-slider p-1"
        containerClass="carousel-container"
        responsive={responsive}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        {movies.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </Carousel>
    </div>
  );
};

export default MovieSlider;
