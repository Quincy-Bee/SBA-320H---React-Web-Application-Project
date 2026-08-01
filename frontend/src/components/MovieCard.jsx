function MovieCard({ movie }) {
  return (
    <div>
      <img 
        src={movie.Poster} 
        alt={movie.Title}
      />

      <h3>{movie.Title}</h3>

      <p>Year: {movie.Year}</p>

    </div>
  );
}

export default MovieCard;