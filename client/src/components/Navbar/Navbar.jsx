const Navbar = () => {
    return (
        <nav className="flex flex-row px-64 justify-between items-center fixed top-0 left-0 right-0 shadow-lg h-[8vh] z-100">
            <a className="text-5xl decoration-none hover:cursor-pointer" href="/">Movies</a>
            <a href="/all-movies" className="text-xl hover:text-2xl transition-all duration-150 hover:cursor-pointer">All movies</a>
        </nav>
    )
}

export default Navbar;