import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Footer from './components/Footer';
import Loader from './components/Loader';

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
            {/*Loader*/}
            {filteredMovies.length == 0 &&
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
            }
            {/*Navbar*/}
            <Navbar
                movies={movies}
                setFilteredMovies={(movies) => setFilteredMovies(movies)}
                setSearchValue={(value) => setSearchValue(value)} />
            {searchValue == "" ? <Slider /> : null}
            {/*Movies*/}
            <div className='max-w-screen-xl mx-auto px-4 bg-black'>
                {filteredMovies && filteredMovies.length > 0 ? (
                    <MovieList movies={filteredMovies} />
                ) : searchValue != '' ? (
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
                ) : null}
            </div>
            {/*Footer*/}
            <Footer />
        </div>
    );
}

export default App;
