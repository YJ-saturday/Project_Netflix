import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Badge } from 'react-bootstrap';
import { useSearchMovieQuery } from '../../hooks/useSearchMovie';
import { useMovieGenerQuery } from '../../hooks/useMovieGenre';
import { useSearchParams } from 'react-router-dom';
import MovieCard from '../../common/MovieCard/MovieCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import './MoviePage.style.css';

const MoviePage = () => {
  const [query] = useSearchParams();
  const keyword = query.get('q');

  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [selectedGenre, setSelectedGenre] = useState(null);

  // API로부터 모든 장르 데이터를 받아옴
  const { data: genreData } = useMovieGenerQuery();

  // useSearchMovieQuery는 page와 keyword에 따라 해당 페이지의 데이터를 반환
  const { data, isLoading, isError, error } = useSearchMovieQuery({
    keyword,
    page,
  });
  console.log('search', data);

  // 새로운 페이지의 데이터를 누적함 (keyword가 바뀌면 page를 1로 리셋하고 movies 배열도 초기화)
  useEffect(() => {
    if (data && data.results) {
      if (page === 1) {
        setMovies(data.results);
      } else {
        setMovies((prevMovies) => [...prevMovies, ...data.results]);
      }
      if (data.page >= data.total_pages) {
        setHasMore(false);
      }
    }
  }, [data, page]);

  // keyword가 변경되면 초기화 처리
  useEffect(() => {
    setPage(1);
    setMovies([]);
    setHasMore(true);
  }, [keyword]);

  // 무한 스크롤 시 다음 페이지를 불러오는 함수
  const fetchMoreData = () => {
    if (data && page < data.total_pages) {
      setPage((prevPage) => prevPage + 1);
    } else {
      setHasMore(false);
    }
  };

  if (isLoading && page === 1) {
    return (
      <div className="spinner-area">
        <Spinner
          animation="border"
          variant="danger"
          style={{ width: '5rem', height: '5rem' }}
        />
      </div>
    );
  }

  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  // 전체 누적된 영화들 중 선택된 장르로 필터링
  const filteredMovies = movies.filter((movie) =>
    selectedGenre ? movie.genre_ids.includes(selectedGenre) : true
  );

  return (
    <Container fluid className="movieContainer">
      <Row>
        <div className="genreTitle">
          <h1>GENRE</h1>
          {genreData?.map((genre, index) => (
            <Badge
              bg={selectedGenre === genre.id ? 'primary' : 'danger'}
              key={index}
              onClick={() =>
                setSelectedGenre(selectedGenre === genre.id ? null : genre.id)
              }
              style={{ cursor: 'pointer', marginBottom: '5px' }}
            >
              {genre.name}
            </Badge>
          ))}
        </div>
        <Col lg={10} xs={12} style={{ width: '88%', marginLeft: '220px' }}>
          <InfiniteScroll
            style={{ overflow: 'visible' }}
            dataLength={filteredMovies.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={
              <div className="spinner-area">
                <Spinner
                  animation="border"
                  variant="danger"
                  style={{ width: '3rem', height: '3rem' }}
                />
              </div>
            }
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>No more movies</b>
              </p>
            }
          >
            <Row className="g-3 moviePageList">
              {filteredMovies.map((movie, index) => (
                <Col key={index} lg={2} xs={12}>
                  <MovieCard movie={movie} />
                </Col>
              ))}
            </Row>
          </InfiniteScroll>
        </Col>
      </Row>
    </Container>
  );
};

export default MoviePage;
