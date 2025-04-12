import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import MovieCard from "./components/MovieCard";
import { useDebounce } from "react-use";
const API_BASE_URL = "https://api.themoviedb.org/3";
import { updateSearchCount } from "./appwrite.js";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`, 
  },
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  // Debounce the search term to avoid too many API calls
  useDebounce(
    () => {
      setDebouncedSearchTerm(searchTerm);
    },
    500,
    [searchTerm]
  );
  const fetchMovies = async (query = '') => {
    setIsLoading(true); // Bắt đầu tải
    try {
      const endpoint = query
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);
  
      console.log("API Key:", API_KEY);
      console.log("Response Status:", response.status);
      if (!response.ok) {
        const errorBody = await response.text();
        console.error("Error Body:", errorBody);
        throw new Error("Failed to fetch movies");
      }
  
      const data = await response.json();
      console.log(data);
      setMovieList(data.results); // Assuming `results` contains the movies
      
      updateSearchCount();

    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
      setErrorMessage("Error fetching movies. Please try again later");
    } finally {
      setIsLoading(false); // Kết thúc tải
    }
  };
  useEffect(() => {
    fetchMovies(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <main>
      <div className="pattern"></div>
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>
            Find <span className="text-gradient">Movies</span> You'll Enjoy
            Without the Hassle
          </h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>
        <section className="all-movies">
          <h2 className="mt-8">All Movies</h2>
          {isLoading ? (
            <p className="text-white">Loading...</p>
          ) : errorMessage ? (
            <p className="error-message text-red-500">{errorMessage}</p>
          ) : (
            <ul>
              {movieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          )}

          {/* Render movie list here */}
        </section>
      </div>
    </main>
  );
};

export default App;
