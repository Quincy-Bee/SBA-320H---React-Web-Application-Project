import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";

function App() {

  const [movies, setMovies] = useState([]);

  return (
    <div>

      <Header />

      <SearchBar setMovies={setMovies} />

      <MovieList movies={movies} />

    </div>
  );
}

export default App;