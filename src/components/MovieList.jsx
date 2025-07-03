import MovieCard from "./MovieCard";

function MovieList({ movies }) {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[300px] gap-4 my-10 place-items-center'>
            {movies.map((movie, movieIdx) => (
                <MovieCard
                    key={movie.tconst}
                    movie={movie}
                    movieIdx={movieIdx}
                />
            ))}
        </div>
    );
}

export default MovieList;
