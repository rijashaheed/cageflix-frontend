import { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

function Navbar({ movies, setFilteredMovies }) {

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (!searchTerm) {
      setFilteredMovies(movies);
      return;
    }

    const options = {
      keys: ['title', 'genres', 'people.primaryName'],
      threshold: 0.3
    };

    const fuse = new Fuse(movies, options);
    const results = fuse.search(searchTerm);
    setFilteredMovies(results.map(r => r.item));
  }, [searchTerm, movies]);

  return (
    <nav className="sticky top-0 z-10 bg-black text-white px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0 shadow-md">
      {/* Left: Logo + Links */}
      <div className="flex items-center gap-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-red-600 tracking-tight">
          Cage<span className="text-white">flix</span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex gap-4 text-sm font-medium">
          <a href="#" className="hover:text-red-500 transition">Home</a>
          <a href="#" className="hover:text-red-500 transition">Movies</a>
          <a href="#" className="hover:text-red-500 transition">Shows</a>
        </div>
      </div>
      
      <div className="relative w-full max-w-xs">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search movies, genres, or actors..."
          className="w-full pl-10 pr-3 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
        />
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
      </div>
    </nav>
  );
}

export default Navbar;