import MovieCard from "./MovieCard";

function MovieList({ movies, setWatchlist }) {

    return (
        <div>
            {movies.map((movie) => (
                <MovieCard
                    key={movie.imdbID}
                    movie={movie}
                    setWatchlist={setWatchlist}
                />
            ))}
        </div>
    );
}

export default MovieList;