import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState("");
  const getMovieDetail = async () => {
    const result = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const { data } = await result.json();
    setMovie(data.movie);
  };
  useEffect(() => {
    getMovieDetail();
  }, []);

  return (
    <div>
      <img src={movie.medium_cover_image}></img>
      <a href={movie.url} target="_blank">
        {movie.title}
      </a>
      <p>{movie.description_intro}</p>
    </div>
  );
}
export default Detail;
