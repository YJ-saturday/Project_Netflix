import React from 'react';
import { useRatedMoviesQuery } from '../../../../hooks/useRatedMovieSlide';
import { Alert } from 'bootstrap';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';

const RatedMovieSlide = () => {
  const { data, isLoading, isError, error } = useRatedMoviesQuery();

  console.log('RatedMovieSlide', data);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div>
      <MovieSlider
        title="Rated Movies"
        movies={data.results}
        responsive={responsive}
      />
    </div>
  );
};

export default RatedMovieSlide;
