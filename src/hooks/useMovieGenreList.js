import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieGenreList = () => {
  return api.get(
    `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`
  );
};

export const useMovieGenreQueryList = () => {
  return useQuery({
    queryKey: ['movie-genre-list'],
    queryFn: fetchMovieGenreList,
    select: (result) => result.data.results,
  });
};
