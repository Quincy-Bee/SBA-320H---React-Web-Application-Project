function Watchlist({ watchlist, removeFromWatchlist }) {

  return (
    <div>

      <h2>
        My Watchlist
      </h2>


      {watchlist.map((movie) => (

        <div key={movie.imdbID}>

          <p>
            {movie.Title}
          </p>

          <button
            onClick={() => removeFromWatchlist(movie.imdbID)}
          >
            Remove
          </button>

        </div>

      ))}


    </div>
  );
}

export default Watchlist;