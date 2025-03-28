import React from 'react';
import Banner from './components/Banner/Banner';
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide';
import RatedMovieSlide from './components/RatedMovieSlide/RatedMovieSlide';
import UpcomingMovieSlide from './components/UpcomingMovieSlide/UpcomingMovieSlide';
import Footer from './components/Footer/Footer';

const Homepage = () => {
  return (
    <div>
      <Banner />
      <PopularMovieSlide />
      <RatedMovieSlide />
      <UpcomingMovieSlide />
      <Footer />
    </div>
  );
};

export default Homepage;
