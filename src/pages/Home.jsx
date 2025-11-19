import React from "react";
import { Link } from "react-router-dom";
import movies from "../data/movies";
import hero from "../image/image_Home.jpeg";

export default function Home() {
  return (
    <>
      {/* IMAGE HERO */}
      <div className="hero-banner">
        <img src={hero} className="hero-img" alt="Hero" />
      </div>

      {/* LISTE DES FILMS */}
      <div className="movies-row">
        {movies.map((movie) => (
          <Link key={movie.id} to={`/details/${movie.id}`}>
            <img src={movie.image} alt={movie.title} className="movie-card" />
          </Link>
        ))}
      </div>
    </>
  );
}

