import moviesApi from '../api/apiMovies';
import { Movie, MoviesInterface } from '../interfaces/apiMoviesinterface';
import { useEffect, useState } from 'react';

interface hookMovies {
  loading: boolean;
  movies: MoviesState;
}

interface MoviesState {
  topRated: Movie[];
  popular: Movie[];
  nowPlaying: Movie[];
  upcoming: Movie[];
}

export const useMovies = (): hookMovies => {
  const [movies, setMovies] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });
  const [loading, setLoading] = useState(true);

  const getMovies = async () => {
    try {
      const topRatedPromise = moviesApi.get<MoviesInterface>('/now_playing');
      const popularPromise = moviesApi.get<MoviesInterface>('/popular');
      const nowPlayingPromise = moviesApi.get<MoviesInterface>('/upcoming');
      const upcomingPromise = moviesApi.get<MoviesInterface>('/top_rated');

      const respuesta = await Promise.all([
        topRatedPromise,
        popularPromise,
        nowPlayingPromise,
        upcomingPromise,
      ]);

      setMovies({
        topRated: respuesta[0].data.results,
        popular: respuesta[1].data.results,
        nowPlaying: respuesta[2].data.results,
        upcoming: respuesta[3].data.results,
      });

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    loading,
    movies,
  };
};