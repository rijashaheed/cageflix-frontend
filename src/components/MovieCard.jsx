function MovieCard({ movie }) {
    console.log("movie", movie)
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
                <img
                    src={poster}
                    // alt={movie.title}
                    // style={{ width: '200px', height: '100px' }}
                />
            </div>
            {/* Title & Year */}
            <div style={{ backgroundColor: "black" }}>
                <h5 style={{ color: "white" }}>{movie.title}</h5>
                <h5 style={{ color: "white" }}>{movie.year}</h5>
            </div>
        </div >
    );
}

export default MovieCard;
