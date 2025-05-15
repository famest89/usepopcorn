import { useState } from 'react';

import Box from './components/main/Box';
import ErrorMessage from './components/main/ErrorMessage';
import Loader from './components/main/Loader';
import Main from './components/main/Main';
import MovieDetails from './components/main/MovieDetails';
import MovieList from './components/main/MovieList';
import WatchedMoviesList from './components/main/WatchedMoviesList';
import WatchedSummary from './components/main/WatchedSummary';
import NavBar from './components/navbar/NavBar';
import NumResults from './components/navbar/NumResults';
import Search from './components/navbar/Search';
import { useLocalStorageState } from './hooks/useLocalStorageState';
import { useMovies } from './hooks/useMovies';

export default function App() {
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState(null);

  const { movies, isLoading, error } = useMovies(query);

  const [watched, setWatched] = useLocalStorageState([], 'watched');

  const handleSelectMovie = (id) => {
    setSelectedId((currId) => (id === currId ? null : id));
  };

  //* without arrow function so this function can be called even before declaration
  function handleCloseMovie() {
    setSelectedId(null);
  }

  const handleAddWatched = (movie) => {
    setWatched((currWatched) => [...currWatched, movie]);
  };

  const handleDeleteWatched = (id) => {
    setWatched((currWatched) =>
      currWatched.filter((movie) => movie.imdbID !== id),
    );
  };

  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>

      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>

        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
