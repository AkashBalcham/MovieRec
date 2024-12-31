import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";

const AllMoviesPage = () => {

    const navigate = useNavigate();

    const handleClick = (letter) => {
        navigate(`/all-movies/${letter}`);
    }


    return (
        <div className="pt-[10vh] px-16">
            <Navbar />
            <div className="grid grid-cols-5 grid-row-space gap-y-6">
                <button className="ml-auto mr-auto text-xl w-[40%] rounded-lg border-gray-400 border-[2px] py-2 text-center hover:bg-gray-700 hover:text-white transition-all duration-300" onClick={() => {handleClick('A')}}>A</button>
                <button className="ml-auto mr-auto text-xl w-[40%] rounded-lg border-gray-400 border-[2px] py-2 text-center hover:bg-gray-700 hover:text-white transition-all duration-300" onClick={() => {handleClick('B')}}>B</button>
                <button className="ml-auto mr-auto text-xl w-[40%] rounded-lg border-gray-400 border-[2px] py-2 text-center hover:bg-gray-700 hover:text-white transition-all duration-300" onClick={() => {handleClick('C')}}>C</button>
                <button className="ml-auto mr-auto text-xl w-[40%] rounded-lg border-gray-400 border-[2px] py-2 text-center hover:bg-gray-700 hover:text-white transition-all duration-300" onClick={() => {handleClick('D')}}>D</button>
                <button className="ml-auto mr-auto text-xl w-[40%] rounded-lg border-gray-400 border-[2px] py-2 text-center hover:bg-gray-700 hover:text-white transition-all duration-300" onClick={() => {handleClick('E')}}>E</button>
                <button className="ml-auto mr-auto text-xl w-[40%] rounded-lg border-gray-400 border-[2px] py-2 text-center hover:bg-gray-700 hover:text-white transition-all duration-300" onClick={() => {handleClick('F')}}>F</button>
                <button className="ml-auto mr-auto text-xl w-[40%] rounded-lg border-gray-400 border-[2px] py-2 text-center hover:bg-gray-700 hover:text-white transition-all duration-300" onClick={() => {handleClick('G')}}>G</button>
                <button className="ml-auto mr-auto text-xl w-[40%] rounded-lg border-gray-400 border-[2px] py-2 text-center hover:bg-gray-700 hover:text-white transition-all duration-300" onClick={() => {handleClick('H')}}>H</button>
                <button className="ml-auto mr-auto text-xl w-[40%] rounded-lg border-gray-400 border-[2px] py-2 text-center hover:bg-gray-700 hover:text-white transition-all duration-300" onClick={() => {handleClick('I')}}>I</button>
                <button className="ml-auto mr-auto text-xl w-[40%] rounded-lg border-gray-400 border-[2px] py-2 text-center hover:bg-gray-700 hover:text-white transition-all duration-300" onClick={() => {handleClick('J')}}>J</button>
                <button className="ml-auto mr-auto text-xl w-[40%] rounded-lg border-gray-400 border-[2px] py-2 text-center hover:bg-gray-700 hover:text-white transition-all duration-300" onClick={() => {handleClick('K')}}>K</button>
                <button className="ml-auto mr-auto text-xl w-[40%] rounded-lg border-gray-400 border-[2px] py-2 text-center hover:bg-gray-700 hover:text-white transition-all duration-300" onClick={() => {handleClick('L')}}>L</button>
                <button className="ml-auto mr-auto text-xl w-[40%] rounded-lg border-gray-400 border-[2px] py-2 text-center hover:bg-gray-700 hover:text-white transition-all duration-300" onClick={() => {handleClick('M')}}>M</button>
                <button className="ml-auto mr-auto text-xl w-[40%] rounded-lg border-gray-400 border-[2px] py-2 text-center hover:bg-gray-700 hover:text-white transition-all duration-300" onClick={() => {handleClick('N')}}>N</button>
                <button className="ml-auto mr-auto text-xl w-[40%] rounded-lg border-gray-400 border-[2px] py-2 text-center hover:bg-gray-700 hover:text-white transition-all duration-300" onClick={() => {handleClick('O')}}>O</button>
                <button className="ml-auto mr-auto text-xl w-[40%] rounded-lg border-gray-400 border-[2px] py-2 text-center hover:bg-gray-700 hover:text-white transition-all duration-300" onClick={() => {handleClick('P')}}>P</button>
                <button className="ml-auto mr-auto text-xl w-[40%] rounded-lg border-gray-400 border-[2px] py-2 text-center hover:bg-gray-700 hover:text-white transition-all duration-300" onClick={() => {handleClick('Q')}}>Q</button>
                <button className="ml-auto mr-auto text-xl w-[40%] rounded-lg border-gray-400 border-[2px] py-2 text-center hover:bg-gray-700 hover:text-white transition-all duration-300" onClick={() => {handleClick('R')}}>R</button>
                <button className="ml-auto mr-auto text-xl w-[40%] rounded-lg border-gray-400 border-[2px] py-2 text-center hover:bg-gray-700 hover:text-white transition-all duration-300" onClick={() => {handleClick('S')}}>S</button>
                <button className="ml-auto mr-auto text-xl w-[40%] rounded-lg border-gray-400 border-[2px] py-2 text-center hover:bg-gray-700 hover:text-white transition-all duration-300" onClick={() => {handleClick('T')}}>T</button>
                <button className="ml-auto mr-auto text-xl w-[40%] rounded-lg border-gray-400 border-[2px] py-2 text-center hover:bg-gray-700 hover:text-white transition-all duration-300" onClick={() => {handleClick('U')}}>U</button>
                <button className="ml-auto mr-auto text-xl w-[40%] rounded-lg border-gray-400 border-[2px] py-2 text-center hover:bg-gray-700 hover:text-white transition-all duration-300" onClick={() => {handleClick('V')}}>V</button>
                <button className="ml-auto mr-auto text-xl w-[40%] rounded-lg border-gray-400 border-[2px] py-2 text-center hover:bg-gray-700 hover:text-white transition-all duration-300" onClick={() => {handleClick('W')}}>W</button>
                <button className="ml-auto mr-auto text-xl w-[40%] rounded-lg border-gray-400 border-[2px] py-2 text-center hover:bg-gray-700 hover:text-white transition-all duration-300" onClick={() => {handleClick('X')}}>X</button>
                <button className="ml-auto mr-auto text-xl w-[40%] rounded-lg border-gray-400 border-[2px] py-2 text-center hover:bg-gray-700 hover:text-white transition-all duration-300" onClick={() => {handleClick('Y')}}>Y</button>
                <button className="ml-auto mr-auto text-xl w-[40%] rounded-lg border-gray-400 border-[2px] py-2 text-center hover:bg-gray-700 hover:text-white transition-all duration-300" onClick={() => {handleClick('Z')}}>Z</button>
            </div>
        </div>
    )
}

export default AllMoviesPage;