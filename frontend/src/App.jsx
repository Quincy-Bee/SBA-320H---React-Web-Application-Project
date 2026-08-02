import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import Watchlist from "./components/Watchlist";

function App() {

  const [movies, setMovies] = useState([]);

  // State for WatchList
  const [watchlist, setWatchlist] = useState([]);

  // use effect for local storage 1
  useEffect(() => {

  const savedMovies = localStorage.getItem("watchlist");

  if (savedMovies) {
    setWatchlist(JSON.parse(savedMovies));
  }

}, []);

  // use effect for local storage 2

useEffect(() => {

  localStorage.setItem(
    "watchlist",
    JSON.stringify(watchlist)
  );

}, [watchlist]);

  // end use effect for local storage

  // remove movie

  const removeFromWatchlist = (id) => {

  const updatedWatchlist = watchlist.filter(
    (movie) => movie.imdbID !== id
  );

  setWatchlist(updatedWatchlist);

};
 
// end remove movie

  return (
    <div>

      <Header />

      <SearchBar setMovies={setMovies} />

      <MovieList
        movies={movies}
        watchlist={watchlist}
        setWatchlist={setWatchlist} />

        <Watchlist 
        watchlist={watchlist}
      />

    </div>
  );
}

export default App;