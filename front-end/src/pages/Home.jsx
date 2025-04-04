import React, { useState } from "react";
import MovieCard from "../components/MovieCard";
import "../styles/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    {
      id: 1,
      title: "Hotel Transylvania",
      url: "",
      release_date: "2022",
    },
    {
      id: 2,
      title: "The Humans",
      url: "",
      release_date: "2025",
    },
    {
      id: 3,
      title: "Terminator",
      url: "",
      release_date: "1989",
    },
    {
      id: 4,
      title: "Titanic",
      url: "",
      release_date: "2002",
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();

    setSearchQuery("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="movies-grid">
        {movies.map(
          (movie) =>
            movie.title.toLocaleLowerCase().startsWith(searchQuery) && (
              <MovieCard movie={movie} key={movie.id} />
            )
        )}
      </div>
    </div>
  );
}

export default Home;
