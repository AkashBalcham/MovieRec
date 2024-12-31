import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import MovieCard from "../../components/MovieCard/MovieCard";
import axios from "axios";

const ResultPage = () => {

    const location = useLocation();
    const api_key = "4e1f65d9505e29c0a0881b7964fb48e8";
    const navigate = useNavigate();
    const query = new URLSearchParams(location.search).get('query');

    const [ movies, setMovies ] = useState([]);
    const [ isResultFetched, setIsResultFetched ] = useState(false);

    useEffect(() => {
        const fetchMovies = async () => {
            // console.log(query);

            try {
                const response = await axios.get(`http://localhost:5000/prompt?userPrompt=${query}`);
                console.log(response.data);
                setMovies(await response.data);
                setIsResultFetched(true);
            } catch (err) {
                alert("Error: ", err.message);
                navigate('/');
            }
        }

        fetchMovies();
    }, [])

    return (
        <div className="flex flex-row items-center justify-between pt-[12vh] px-8">
            <Navbar />
            {
                ( isResultFetched === false) ? (
                    <div>
                        Loading...
                    </div>

                ) : ( movies.length === 0) ? (
                    <div>
                        No results found...
                    </div>
                ) : (
                    movies.map(movie => 
                        <MovieCard 
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            poster={movie.poster_path}
                            big={false}
                        />
                    )
                )
            }
        </div>
    )
}

export default ResultPage;




/*
const imageUrl = `https://image.tmdb.org/t/p/original${file_path}`;

https://image.tmdb.org/t/p/original/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg

https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=Inception

*/