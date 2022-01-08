import { useEffect, useState } from "react";

import Movie from "../components/Movie";
function Home() {
  const [loading, setloading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )
    ).json();
    setMovies(response.data.movies);
    setloading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie, i) => (
            <Movie
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.hasOwnProperty("genres") ? movie.genres : null}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;
