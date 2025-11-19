import React from "react";
import { Link } from "react-router-dom";
import movies from "../data/movies";
import hero from "../image/image_Home.jpeg";
import  { useState, useEffect } from "react";

import bgVideo from "../image/bg.mp4";
import { useState, useEffect } from "react";

export default function Home() {

  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setShowPopup(true);
  }, []);

   const handleSubmit = (e) => {
  e.preventDefault();

  // Vérification basique de l'email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email.trim()) {
    setError("Please enter your email address!");
    return;
  }

  if (!emailRegex.test(email)) {
    setError("Please enter a valid email address!");
    return;
  }

  setError("");        // email valide → clear error
  setShowPopup(false); // fermer popup
};

  
  return (
    <>
{/* POPUP */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2>Welcome ! 👋</h2>
            <p>Enter your email to continue</p>

            <input
              type="email"
              placeholder="Your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
      {/* HERO AVEC VIDEO BACKGROUND */}

            {error && <p style={{ color: "red", marginTop: "8px" }}>{error}</p>}
            

            <button onClick={handleSubmit}>Continue</button>
          </div>
        </div>
      )}

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
