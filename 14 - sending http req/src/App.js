import React, { useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchMoviesHandler();
  }, []);

  const fetchMoviesHandler = async () => {
    try {
      setIsLoading(true);
      /*  fetch("https://swapi.dev/api/films/")
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          console.log(res);
          setMovies(res.results);
        }); */

      const response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) throw new Error("error with the req");

      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && <MoviesList movies={movies} />}
        {!isLoading && error && <p>{error}</p>}
        {!isLoading && movies.length === 0 && !error && <p>found no movies</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
