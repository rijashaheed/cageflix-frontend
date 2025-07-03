// import poster from '../assets/images/the-view.jpg'
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.webp'
import img3 from '../assets/images/img3.jpg'
import img4 from '../assets/images/img4.webp'
import img5 from '../assets/images/img5.webp'

const images = [
  img1, img2, img3, img4, img5
//   img6, img7, img8, img9, img10,
//   img11, img12, img13, img14, img15,
//   img16, img17, img18, img19, img20
];

function MovieCard({ movie, movieIdx }) {
    return (
        <div className="group relative w-full max-w-[300px] h-[250px] bg-zinc-900 rounded-md overflow-hidden text-white hover:scale-105 transition-transform duration-300">
            {/* Poster (fills card completely) */}
            <img
                // src={poster} // Replace with dynamic logic later
                src={images[movieIdx % images.length]}
                alt={movie.title}
                className="w-full h-full object-cover"
            />

            {/* Overlay with details (invisible until hover) */}
            <div className="absolute bottom-0 left-0 w-full bg-zinc-900/90 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-sm font-semibold truncate">{movie.title}</h3>
                <p className="text-xs text-gray-400">{movie.startYear} · {movie.genres}</p>
                <div className="flex gap-2 mt-2">
                    <button className="bg-white text-black px-2 py-1 text-xs font-semibold rounded hover:bg-gray-200">▶ Play</button>
                    <button className="border border-gray-400 px-2 py-1 text-xs rounded hover:bg-gray-800">＋</button>
                </div>
            </div>
        </div>
    );
}

export default MovieCard