import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

const BASE_URL = "http://localhost:4000";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/actors`)
      .then((res) => res.json())
      .then(setActors);
  }, []);

  return (
    <>
      <NavBar />
      <h1>Actors Page</h1>
      {actors.map((actor) => (
        <article key={actor.name}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie, i) => (
              <li key={i}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </>
  );
}

export default Actors;