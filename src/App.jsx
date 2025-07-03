import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';

function MovieSearch() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredMovies, setFilteredMovies] = useState([]);

    useEffect(() => {
        console.log("useEffect 1..")
        fetch('http://localhost:3000/movies')
            .then(res => res.json())
            .then(data => {
                console.log("set movies 1")
                setMovies(data);
                setFilteredMovies(data); // initial full list
            });
    }, []);


    return (
        <>
            <Navbar
                movies={movies}
                setFilteredMovies={(movies) => setFilteredMovies(movies)} />
            <div className='max-w-7xl  mx-auto'>
                <MovieList movies={filteredMovies} />
            </div>
        </>

    );
}

export default MovieSearch;
