import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import Watchlist from "./components/Watchlist";

function App() {

  const [movies, setMovies] = useState([]);

  // Load watchlist from localStorage
  const [watchlist, setWatchlist] = useState(() => {
    const savedMovies = localStorage.getItem("watchlist");

    return savedMovies ? JSON.parse(savedMovies) : [];
  });


  // Save watchlist to localStorage
  useEffect(() => {

    localStorage.setItem(
      "watchlist",
      JSON.stringify(watchlist)
    );

  }, [watchlist]);


  // Remove movie from watchlist
  const removeFromWatchlist = (id) => {

    const updatedWatchlist = watchlist.filter(
      (movie) => movie.imdbID !== id
    );

    setWatchlist(updatedWatchlist);

  };


  return (
    <div className="app">

      <Header />

      <SearchBar 
        setMovies={setMovies} 
      />


      <section className="movie-section">

        <h2>Search Results</h2>

        <MovieList
          movies={movies}
          watchlist={watchlist}
          setWatchlist={setWatchlist}
        />

      </section>


      <section className="watchlist-section">

        <Watchlist
          watchlist={watchlist}
          removeFromWatchlist={removeFromWatchlist}
        />

      </section>

    </div>
  );
}

export default App;