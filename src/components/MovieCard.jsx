function MovieCard({ movie, key }) {
    const cardStyle = 'bg-neutral-100 border-2 rounded-xl p-2 flex flex-col items-center justify-center'
    console.log("movie", movie)
    return (
        <div key={key} className={`${cardStyle}`}>
            {/* <div>
                <img
                    src={poster}
                // alt={movie.title}
                // style={{ width: '200px', height: '100px' }}
                />
            </div> */}
            {/* Title & Year */}
            <h2 className='text-xl text-gray-600'>{movie.title}</h2>
            <p className='font-bold text-2xl '>{movie.startYear}</p>
        </div >
    );
}

export default MovieCard;
