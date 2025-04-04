import React from "react";
import "../styles/MovieCard.css";

function MovieCard({ movie }) {
  function onFavoriteClick() {
    alert("hey you clicked me");
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.url} alt={movie.title} />
      </div>
      <div className="movie-overlay">
        <button className="favorite-btn" onClick={onFavoriteClick}>
          🤍
        </button>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
