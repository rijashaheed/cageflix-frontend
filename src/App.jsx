import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';
import Slider from './components/Slider';

function App() {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');
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
        <div className='bg-black'>
            <Navbar
                movies={movies}
                setFilteredMovies={(movies) => setFilteredMovies(movies)}
                setSearchValue={(value) => setSearchValue(value)} />
            {searchValue == "" ? <Slider /> : null}
            <div className='max-w-screen-xl mx-auto px-4 bg-black'>
                <MovieList movies={filteredMovies} />
            </div>
        </div>

    );
}

export default App;
