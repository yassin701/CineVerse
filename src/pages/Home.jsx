import { Link } from "react-router-dom";
import movies from "../data/movies";
import bgVideo from "../image/bg.mp4";
import { useState, useEffect } from "react";

export default function Home() {

  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const closePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    const hasShown = sessionStorage.getItem("popupShown");

    if (!hasShown) {

      const timer = setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem("popupShown", "true");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      setError("Please enter your email address!");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address!");
      return;
    }
    setError("");
    setShowPopup(false);
  };




  return (
    <>
      {/* POPUP */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <div>
              <h2>Welcome ! 👋</h2>
              <p>Enter your email to continue</p>

              <input type="email" placeholder="Your email..." value={email} onChange={(e) => setEmail(e.target.value)} />
              {error && (
                <p style={{ color: "red", marginTop: "8px" }}>{error}</p>
              )}
              <div className="btn-row">
                <button className="continue-btn" onClick={handleSubmit}>Continue</button>
                <button className="close-btn" onClick={closePopup}>close ✖</button>
              </div>
            </div>
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
