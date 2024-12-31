// import './MovieCard.css'

const MovieCard = (props) => {

    console.log(props);

    return (
        <div className={`border-gray-500 rounded-b-xl border-[2px] ${props.big ? "ml-auto mr-auto w-[100%]" : "w-[18%]"} flex flex-col items-center justify-start `}>
            <img src={props.poster} alt={props.title} />
            <a className='text-2xl mt-4 text-center' href={`/movies/${props.id}`}>{ props.title }</a>
        </div>
    )
}

export default MovieCard;