import Nav from './Nav.js'
import Rows from "./Rows.js";
import Billboard from './Billboard.js'

import requests from "./requests.js";

import './App.css';

function App() {
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

export default App;
