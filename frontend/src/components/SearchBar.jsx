import { useState } from "react";


// Search Bar Component

function SearchBar({ setMovies }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&s=${searchTerm}`
    );

    const data = await response.json();

    console.log(data);

    setMovies(data.Search || []);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for a movie"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      <button type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;