function MovieCard({ movie, setWatchlist }) {

  const addToWatchlist = () => {

    setWatchlist((previousMovies) => [
      ...previousMovies,
      movie
    ]);

  };


  return (
    <div className="movie-card">

      <img 
        src={movie.Poster}
        alt={movie.Title}
      />

      <h3>{movie.Title}</h3>

      <p>
        Year: {movie.Year}
      </p>

      <button onClick={addToWatchlist}> 
        Add to Watchlist
      </button>

    </div>
  );
}

export default MovieCard;