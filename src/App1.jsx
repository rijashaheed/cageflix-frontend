// import React, { useEffect, useState } from 'react';
// import Fuse from 'fuse.js';

// function App() {
//   const [movies, setMovies] = useState([]);
//   const options = {
//     keys: [
//       'title',
//       'genres',
//       'people.primaryName' // nested search inside people[]
//     ],
//     threshold: 0.3 // how fuzzy (0 = exact, 1 = very loose)
//   };

//   const fuse = new Fuse(movies, options);

//   // Search when query changes:
//   const results = fuse.search(searchTerm);
//   const filteredMovies = results.map(result => result.item);


//   useEffect(() => {
//     console.log("useeffect..")
//     fetch('http://localhost:3000/movies')
//       .then((res) => {
//         console.log("movies res", res)
//         return res.json() 	//Parses the raw HTTP response body into a usable JSON object
//       })
//       .then((data) => {
//         console.log("movies data", data)
//         return setMovies(data) //	Uses the parsed JSON (an array of movies) to update your state
//       })
//       .catch((err) => console.error('Error:', err));
//   }, []);

//   return (
//     <div>
//       {/* <h2>Movie List</h2>
//       <ul>
//         {movies && movies.map((movie) => (
//           <li key={movie.tconst}>
//             {movie.title} ({movie.startYear})
//           </li>
//         ))}
//       </ul> */}
//       <div>
//         <h1>Movie Search</h1>
//         <input
//           type="text"
//           placeholder="Search title, genre, or actor..."
//           value={searchTerm}
//           onChange={e => setSearchTerm(e.target.value)}
//         />
//         <ul>
//           {filtered.map(movie => (
//             <li key={movie.tconst}>
//               {movie.title} ({movie.startYear}) — {movie.genres}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import Fuse from 'fuse.js';

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
    <div>
      <h1>Movie Search</h1>
      <input
        type="text"
        placeholder="Search title, genre, or actor..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <ul>
        {filtered.map(movie => (
          <li key={movie.tconst}>
            {movie.title} ({movie.startYear}) — {movie.genres}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieSearch;
