import { useEffect, useState } from "react";
import './billboard.css'

function Billboard(props) {
  const [movie, setMovie] = useState([]);
  const fetchURL = "https://api.themoviedb.org/3" + props.url;
  const imageBaseURL = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      try {
        const rawObj = await fetch(fetchURL);
        const response = await rawObj.json();
        setMovie( response.results[Math.floor(Math.random()*response.results.length)]);
      } catch (e) {
        console.log(`err ${e}`);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="billboard" style={{
        backgroundImage: `url(${imageBaseURL + movie.backdrop_path})`
    }}>
        <div className="billboard__content">
            <h1>{movie.title}</h1>
            <h3>{movie.overview}</h3>
            <button className="billboard__button">Play</button>
            <button className="billboard__button">More Info</button>
        </div>
    </div>
  );
}

export default Billboard;
