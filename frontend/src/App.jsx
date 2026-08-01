import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {

  const [movies, setMovies] = useState([]);

  return (
    <div>
      <Header />

      <SearchBar setMovies={setMovies} />

      <h2>Movies Found:</h2>

      {movies.map((movie) => (
        <p key={movie.imdbID}>
          {movie.Title}
        </p>
      ))}

    </div>
  );
}

export default App;