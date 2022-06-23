import Nav from './Nav.jsx'
import Rows from "./Rows.jsx";
import Billboard from './Billboard.jsx'

import requests from "./requests.js";

import './Homepage.css';

function Homepage() {
  return (
    <div>
      <Nav  />
      <Billboard url={requests.fetchTrending} /> 
      <Rows genre="Trending" url={requests.fetchTrending} />
      <Rows genre="Netflix Originals" url={requests.fetchNetflixOriginals} />
      <Rows genre="Comedy Movies" url={requests.fetchComedyMovies} />
      <Rows genre="Documantaries" url={requests.fetchDocumantaries} />
      <Rows genre="Romance Movies" url={requests.fetchRomanceMovies} />
      <Rows genre="Top Rated" url={requests.fetchTopRated} />
      <Rows genre="Horror Movies" url={requests.fetchHorrorMovies} />
    </div>
  );
}

export default Homepage;
