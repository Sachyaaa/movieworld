import React, { useEffect, useState } from "react";
import MovieCard from "./movieCard";
import './App.css';
import SeachIcon from './search.svg';

const ApiUrl = 'https://www.omdbapi.com/?apikey=6c82201a';



const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${ApiUrl}&s=${title}`);
        const data = await response.json();
        console.log(data);
        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('spiderman');
    }, [])


    return (

        <div className="app">
            <h1>Movies World</h1>

            <div className="search">
                <input placeholder="Enter The Movie Name" value={searchTerm}
                    onChange={(e) => {setSearchTerm(e.target.value)}} />
                <img src={SeachIcon} alt='search'
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>
            {movies?.length > 0
                ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No Movies Found</h2>
                    </div>
                )}
            

        </div>
    );
}

export default App;