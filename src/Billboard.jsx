import { useEffect, useState } from "react";
import "./billboard.css";

function Billboard(props) {
  const [movie, setMovie] = useState(null);
  const fetchURL = "https://api.themoviedb.org/3" + props.url;
  const imageBaseURL = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      try {
        const rawObj = await fetch(fetchURL);
        const response = await rawObj.json();
        // console.log(response.results);
        setMovie(
          response.results[Math.floor(Math.random() * response.results.length)]
        );
        // console.log(movie.title);
      } catch (e) {
        console.log(`err ${e}`);
      }
    }
    fetchData();
  }, [fetchURL]);

  let billboardDiv=null;
  if (movie) {
    billboardDiv = (
      <div
        className="billboard"
        style={{
          backgroundImage: `url(${imageBaseURL + movie.backdrop_path})`,
        }}
      >
        <div className="billboard__content">
          <h1>{movie.title}</h1>
          <h3>{movie.overview}</h3>
          <button className="billboard__button">Play</button>
          <button className="billboard__button">More Info</button>
        </div>
      </div>
    );
  }

  return billboardDiv;
}

export default Billboard;
