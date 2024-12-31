import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import './LandingPage.css'
import Navbar from '../../components/Navbar/Navbar'
import { FaSearch } from "react-icons/fa";
import axios from 'axios'
import MovieCard from "../../components/MovieCard/MovieCard";
import { BiSolidCameraMovie } from "react-icons/bi";

const LandingPage = () => {

    const [ prompt, setPrompt ] = useState("");
    const [ movies, setMovies ] = useState(null);

    const navigate = useNavigate();

    // const arr = ['Robert Downey Jr', 'Comedy', 'Interstellar'];
    // localStorage.setItem('recentPrompts', JSON.stringify(arr));

    const recentPrompts = JSON.parse(localStorage.getItem('recentPrompts')) || [];

    const handlePromptSubmit = async () => {

        navigate(`/query-results?query=${prompt}`);
    }

    let ind = 0;

    return (
        <div className="pt-[8vh] flex flex-col items-center">
            <Navbar />
            <div className=" w-[100%] mt-36 flex flex-col items-center mb-40">
                <h1 className="text-3xl mb-2">
                    Movie Recommendation
                </h1>
                <div className="h-full  w-full flex flex-row justify-center items-center">
                    <input className="relative border-gray-600 border-[2px] bg-slate-200 w-[50%] rounded-xl py-4 pl-6 pr-28 text-xl" required={true} placeholder="Movie title or actor or genre..." type="text" value={prompt} onChange={(e) => { setPrompt(e.target.value)}} />
                    <button className="right-[25.05%] absolute bg-blue-500 py-5 px-8 rounded-xl text-center" onClick={handlePromptSubmit}>
                        <FaSearch className="text-2xl " onClick={handlePromptSubmit}/>
                    </button>
                </div>
            </div>

            <div className="w-full flex flex-col items-center">
                {
                    (recentPrompts.length === 0) ? (
                        <div>
                            No recent prompts...
                        </div>

                    ) : (
                        <div className="flex flex-col items-center w-[50%]">
                            <h1 className="text-4xl">Recent prompts</h1>
                            <ul className="flex flex-col items-center w-full mt-4">
                                { recentPrompts.map(prompt => (
                                    <li key={ind++} className="p-4 w-full text-center text-xl hover:shadow-lg transition-all duration-200 hover:cursor-pointer">
                                        { prompt }
                                    </li>
                                ))}

                            </ul>
                        </div>

                    )
                }
            </div>
        </div>
    )
}

export default LandingPage;