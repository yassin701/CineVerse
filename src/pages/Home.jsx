import React from "react";
import { Link } from "react-router-dom";
import movies from "../data/movies";
import bgVideo from "../image/bg.mp4";
import { useState, useEffect } from "react";

export default function Home() {

  
  return (
    <>
      {/* HERO AVEC VIDEO BACKGROUND */}


      

      {/* IMAGE HERO */}
      <div className="hero-banner">
        <video className="bg-video" autoPlay muted loop playsInline>
          <source src={bgVideo} type="video/mp4" />
        </video>
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
