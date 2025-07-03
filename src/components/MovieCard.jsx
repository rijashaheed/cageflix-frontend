import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.webp'
import img3 from '../assets/images/img3.jpg'
import img4 from '../assets/images/img4.webp'
import img5 from '../assets/images/img5.webp'
import img6 from '../assets/images/img6.webp'
import img7 from '../assets/images/img7.webp'
import img8 from '../assets/images/img8.avif'
import img9 from '../assets/images/img9.webp'
import img10 from '../assets/images/img10.png'
import img11 from '../assets/images/img11.jpg'
import img12 from '../assets/images/img12.webp'
import img13 from '../assets/images/img13.webp'
import img14 from '../assets/images/img14.webp'
import img15 from '../assets/images/img15.webp'
import img16 from '../assets/images/img16.webp'
import img17 from '../assets/images/img17.webp'
import img18 from '../assets/images/img18.webp'

const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15, img16, img17, img18
];

function MovieCard({ movie, movieIdx }) {
    console.log("movie in movie card", movie)
    let cast = ''
    if (movie) {
        let maxLength = 100
        let castNames = movie.people.map(person => person.primaryName).join(', ');
        cast = castNames.length > maxLength ? castNames.slice(0, maxLength) + '...' : castNames;

    }
    return (
        <div className="group relative w-full max-w-[300px] h-[250px] bg-zinc-900 rounded-md overflow-hidden text-white hover:scale-105 transition-transform duration-300">
            <img
                src={images[movieIdx % images.length]}
                alt={movie.title}
                className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/60 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-base font-bold truncate text-white">{movie.title}</h3>
                <p className="text-xs text-gray-300">{movie.startYear} • {movie.genres}</p>
                <p className="text-xs text-gray-400 mt-1">
                    <span className="text-gray-500">Cast:</span> {movie.people?.slice(0, 2).map(p => p.primaryName).join(', ')}...
                </p>
            </div>
        </div>
    );
}

export default MovieCard