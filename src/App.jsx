import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Footer from './components/Footer';

function App() {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [filteredMovies, setFilteredMovies] = useState([]);

    useEffect(() => {
        console.log("useEffect..", import.meta.env.VITE_API_URL)
        // fetch('http://localhost:3000/movies')
        fetch(`${import.meta.env.VITE_API_URL}/movies`)
            .then(res => res.json())
            .then(data => {
                console.log("set movies 1", data)
                setMovies(data);
                setFilteredMovies(data); // initial full list
            });
    }, []);


    return (
        <div className="bg-black min-h-screen flex flex-col">
            <Navbar
                movies={movies}
                setFilteredMovies={(movies) => setFilteredMovies(movies)}
                setSearchValue={(value) => setSearchValue(value)} />
            {searchValue == "" ? <Slider /> : null}
            <div className='max-w-screen-xl mx-auto px-4 bg-black'>
                {filteredMovies && filteredMovies.length > 0 ? (
                    <MovieList movies={filteredMovies} />
                ) : (
                    <div className="bg-black min-h-screen text-white px-6 py-20 flex justify-center">
                        <div className="max-w-xl w-full text-left space-y-6">
                            <p className="text-lg">
                                Your search for <span className="font-semibold">"{searchValue}"</span> did not have any matches
                            </p>
                            <p className="text-base font-medium">Suggestions:</p>
                            <ul className="list-disc list-inside text-sm text-gray-300 space-y-2">
                                <li>Try different keywords</li>
                                <li>Try using a film or series title, an actor/actress</li>
                                <li>Try using a genre such as comedy, horror or documentary</li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default App;
