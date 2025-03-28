import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppLayout from './layout/AppLayout';
import HomePage from './pages/Homepage/HomePage';
import MoviePage from './pages/Moives/MoviePage'
import MovieDetailPage from './pages/Moviesdetail/MovieDetailPage'
import NotFoundPage from './pages/Notfound/NotFoundPage';



function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies">
          <Route index element={<MoviePage />} />
          <Route path=":id" element={<MovieDetailPage />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>

  );
}

export default App;
