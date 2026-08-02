function Watchlist({ watchlist }) {

  return (
    <div>

      <h2>
        My Watchlist
      </h2>

      {watchlist.map((movie) => (

        <p key={movie.imdbID}>
          {movie.Title}
        </p>

      ))}

    </div>
  );
}

export default Watchlist;