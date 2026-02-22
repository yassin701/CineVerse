import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import movies from "../data/movies";

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <div>Movie not found</div>;

  const handleResume = () => {
    alert("Streaming feature coming soon! Get ready for the full cinema experience.");
  };

  const handleRate = (rating) => {
    setUserRating(rating);
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 3000);
  };

  return (
    <div
      className="details-view"
      style={{ backgroundImage: `url(${movie.image})` }}
    >
      <div className="details-overlay">
        <button
          onClick={() => navigate(-1)}
          style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.2rem' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          Back
        </button>

        <div className="details-content">
          <div className="movie-meta">
            <span>{movie.year}</span>
            <span style={{ border: '1px solid #808080', padding: '0 5px', fontSize: '0.8rem', color: '#fff' }}>13+</span>
            <span>{movie.genre}</span>
          </div>
          <h1>{movie.title}</h1>
          <p className="movie-desc">{movie.description}</p>

          <div className="cast-info" style={{ color: '#808080', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <p><strong>Cast:</strong> {movie.team.actors.join(', ')}</p>
            <p><strong>Director:</strong> {movie.team.director}</p>
            <p><strong>Producer:</strong> {movie.team.producer}</p>
          </div>

          <div className="hero-btns" style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '20px' }}>
            <button className="hero-btn play" onClick={handleResume}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M6 4l12 8-12 8V4z"></path></svg>
              Resume
            </button>

            <div className="rating-container" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div className="stars" style={{ display: 'flex', gap: '5px' }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    onClick={() => handleRate(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill={(hoverRating || userRating) >= star ? "#E50914" : "none"}
                    stroke={(hoverRating || userRating) >= star ? "#E50914" : "white"}
                    strokeWidth="2"
                    style={{ cursor: 'pointer', transition: 'transform 0.2s, fill 0.2s' }}
                    className="star-icon"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              {showConfirmation && (
                <span style={{ color: '#E50914', fontSize: '0.9rem', fontWeight: 'bold', animation: 'fadeIn 0.3s' }}>
                  Thanks for rating!
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
