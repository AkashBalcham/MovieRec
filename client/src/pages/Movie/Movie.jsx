import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
// import './Movie.css'

const MoviePage = () => {

    const { id } = useParams();

    const [ movie, setMovie ] = useState({});

    useEffect(() => {

        async function getMovie() {
            try {
                const response = await axios.get(`http://localhost:5000/movies/${id}`)
                console.log(response.data)
                setMovie(response.data);
            } catch(err) {
                alert("Error:", err.message);
            }
        }

        getMovie();
    }, [])


    return (

        
            ( !movie.hasOwnProperty('title') ) ? (
                (
                    <div className="pt-[10vh]">
                        <Navbar />
                        Loading...
                    </div>
                )
            ) : (
                <div className="mt-8 pt-[10vh] px-16 flex flex-row justify-around items-start">
                    <Navbar />

                    <div className="flex flex-col items-start justify-between h-full">
                        <h1 className="text-6xl mb-8">{ movie.title }</h1>
                        <h2 className="text-4xl mb-8">Directed by {movie.Director}</h2>
                        <h3 className="text-2xl mb-8">Genres: { movie.genres.split(" ").join(", ") }</h3>
                        <h3 className="text-lg mb-8">Rating: { movie.Ratings }</h3>
                        <h4 className="text-lg mb-8">Runtime: {parseInt(movie.runtime / 60, 10)} hr(s) {parseInt(movie.runtime % 60, 10)} minutes</h4>
                    </div>

                    <img src={movie.poster} alt={movie.title} />


                    {/* <div className="top-row">
                        <div className="left">
                            <h1 className="Movie-Title">Title: <span>{ movie.title }</span></h1>
                            <h1>Director: <span>{movie.Director}</span></h1>
                            <h1>Genres: <span>{ movie.genres.split(" ").join(", ") }</span></h1>
                        </div>

                        <div className="right">
                            <h1 className="movie-rating">Rating: <span>{ movie.Ratings }</span></h1>
                            <h1>Runtime: <span>{parseInt(movie.runtime / 60, 10)} hr(s) {parseInt(movie.runtime % 60, 10)} minutes</span></h1>

                        </div>
                    </div> */}



                    {/* <div className="middle-row">
                    </div> */}


                    {/* <div className="cast-details">
                        <h1>Cast:</h1>
                        <span> {movie.cast} </span>
                    </div> */}
                </div>
            )
        
    )
}

export default MoviePage;



/*
const imageUrl = `https://image.tmdb.org/t/p/original${file_path}`;

*/