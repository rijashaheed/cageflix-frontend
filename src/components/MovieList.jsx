import MovieCard from "./MovieCard";

function MovieList({ movies }) {
    // const boxStyle = 'bg-neutral-100 border-2 rounded-xl p-2 flex flex-col items-center justify-center'
    console.log("movie", movies)
    return (
        <div className='grid md:grid-cols-3 auto-rows-[300px] gap-4 my-10'>
            {movies.map(movie => (
                <MovieCard
                    key={movie.tconst}
                    movie={movie}
                />
            ))}
        </div>
    );
}

export default MovieList;
