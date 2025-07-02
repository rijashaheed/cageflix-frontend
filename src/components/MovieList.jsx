import MovieCard from "./MovieCard";

function MovieList({ movies }) {
    return (
        // <div className="flex gap-4 overflow-x-auto px-4 py-6">
        // <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 px-4 py-6">
        // <div className="flex flex-wrap gap-4 justify-center">
        <div /*className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"*/ style={{display:"flex", flexDirection: "row", justifyContent: "space-between"}}>
            {movies.map(movie => (
                <MovieCard
                    key={movie.tconst}
                    movie={movie}
                    // title={movie.title}
                    // year={movie.startYear}
                    posterUrl={null} // Or your own poster URL if you have one
                />
            ))}
        </div>
    );
}

export default MovieList;
