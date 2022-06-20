import { useState, useEffect } from "react";
import "./rows.css";

export default function Rows(props) {
  const [movies, setMovies] = useState([]);
  const fetchURL = "https://api.themoviedb.org/3" + props.url;
  const imageBaseURL = "https://image.tmdb.org/t/p/w200";

  useEffect(() => {
    async function fetchData() {
      try {
        const rawObj = await fetch(fetchURL);
        const response = await rawObj.json();
        setMovies(response.results);
        // console.log(movies);
        // console.log(movies.forEach((movie) => console.log(movie.poster_path)));
      } catch (e) {
        console.log(`err ${e}`);
      }
    }
    fetchData();
  }, [fetchURL]);

  return (
    <div className="rows">
      <h1>{props.genre}</h1>
      <div className="rows__image-container">
        {movies.map((movie) => (
          <img
            className="rows__images"
            key={movie.id}
            src={imageBaseURL + movie.poster_path}
            alt={movie.title}
          />
        ))}
      </div>
    </div>
  );
}
