import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import MovieCard from "../../components/MovieCard/MovieCard";

const MoviesByLetter = () => {
    const { letter } = useParams();

    const [ movies, setMovies ] = useState([]);
    const [ isResultFetched, setIsResultFetched ] = useState(false);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const movies = await axios.get(`http://localhost:5000/movies/${letter}`);
                setMovies((await movies).data)
                setIsResultFetched(true);
            } catch (err) {
                alert(err);
                return;
            }
        }

        fetchMovies();
    }, [])


    return (
        <div className="pt-[10vh]">
            <Navbar />

            {
                ( isResultFetched === false) ? (
                    <div className="flex flex-row justify-center"> 
                        <h1>Loading...</h1>
                    </div>
                ) : (movies.length === 0) ? (
                    <div className="flex flex-row justify-center">
                        No results found..
                    </div>
                ) : (
                    <div className="w-full flex flex-col items-center justify-start px-16 -z-1">
                        <h1 className="text-center">{ movies.length } results found </h1>
                        <div className="border-[2px] w-full grid grid-cols-5 gap-x-4 gap-y-4">
                        {    
                            movies.map(movie => 
                                <MovieCard 
                                    key={movie.id}
                                    id={movie.id}
                                    title={movie.title}
                                    poster={movie.poster_path}
                                    big={true}
                                />
                        )
                        }
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default MoviesByLetter;