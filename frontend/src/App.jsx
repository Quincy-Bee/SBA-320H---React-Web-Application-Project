import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";

function App() {

  const [movies, setMovies] = useState([]);

  // State for WatchList
  const [watchlist, setWatchlist] = useState([]);

  return (
    <div>

      <Header />

      <SearchBar setMovies={setMovies} />

      <MovieList
        movies={movies}
        watchlist={watchlist}
        setWatchlist={setWatchlist} />

    </div>
  );
}

export default App;