function CSSGrid({ movies }) {
    const boxStyle = 'bg-neutral-100 border-2 rounded-xl p-2 flex flex-col items-center justify-center'
    console.log("movie", movies)
    return (
        <div className='grid md:grid-cols-3 auto-rows-[300px] gap-4 my-10'>
            {movies.map((movie, i) => {
                return (
                    <div key={i} className={`${boxStyle} ${i === 3 || i === 6 ? 'md:col-span-2' : ''}`}>
                        <h2 className='text-xl text-gray-600'>{movie.title}</h2>
                        <p className='font-bold text-2xl '>{movie.startYear}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default CSSGrid;
