import React, { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import MovieList from './components/MovieList';
import CSSGrid from './components/CSSGrid';

function MovieSearch() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/movies')
            .then(res => res.json())
            .then(data => {
                setMovies(data);
                setFiltered(data); // initial full list
            });
    }, []);

    useEffect(() => {
        if (!searchTerm) {
            setFiltered(movies);
            return;
        }

        const options = {
            keys: ['title', 'genres', 'people.primaryName'],
            threshold: 0.3
        };

        const fuse = new Fuse(movies, options);
        const results = fuse.search(searchTerm);
        setFiltered(results.map(r => r.item));
    }, [searchTerm, movies]);

    return (
        // <div>
        //     <h1>Movie Search</h1>
        //     <input
        //         type="text"
        //         value={searchTerm}
        //         onChange={e => setSearchTerm(e.target.value)}
        //         placeholder="Search by title, genre, or actor"
        //     />

        //     <div style={{ display: "flex", width: "100%" }}>
        //         <MovieList movies={filtered} />
        //     </div>
        // </div>

        <div className='max-w-6xl  mx-auto'>
            <h1 className='text-red-500'>Hello world</h1>
            <CSSGrid movies={movies} />
        </div>

    );
}

export default MovieSearch;
