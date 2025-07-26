import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

const BASE_URL = "http://localhost:4000";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/directors`)
      .then((res) => res.json())
      .then(setDirectors);
  }, []);

  return (
    <>
      <NavBar />
      <h1>Directors Page</h1>
      {directors.map((director) => (
        <article key={director.name}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie, i) => (
              <li key={i}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </>
  );
}

export default Directors;
