import { Link, useSearchParams } from "react-router-dom";
import movies from "../data/movies";
import { useState, useEffect } from "react";

export default function Home() {
  const [searchParams] = useSearchParams();
  const filterType = searchParams.get("type");
  const isPopular = searchParams.get("filter") === "popular";
  const searchQuery = (searchParams.get("search") || "").toLowerCase();
  const isSearching = !!searchQuery;

  const genres = ["Sci-Fi", "Fantasy", "Crime/Drama", "Action/Marvel", "Animation"];

  // Filter movies based on category and search
  const filteredMovies = movies.filter(movie => {
    const matchesSearch = !searchQuery ||
      movie.title.toLowerCase().includes(searchQuery) ||
      movie.genre.toLowerCase().includes(searchQuery);

    if (!matchesSearch) return false;
    if (isPopular) return movie.year >= 2021;
    if (filterType) return movie.type === filterType;
    return true;
  });

  // Default hero movie - use the first movie of the filtered list if filtering
  const defaultMovie = filteredMovies.length > 0 ? filteredMovies[0] : movies.find(m => m.id === 1);
  const [activeMovie, setActiveMovie] = useState(defaultMovie);

  // Update active movie when filter/search changes
  useEffect(() => {
    if (defaultMovie) {
      setActiveMovie(defaultMovie);
    }
  }, [filterType, isPopular, searchQuery, defaultMovie]);

  // Handle setting active movie
  const handleMouseEnter = (movie) => {
    setActiveMovie(movie);
  };

  return (
    <div className="home">
      {/* Cinematic Hero - Static Poster Background */}
      {!isSearching && activeMovie && (
        <div
          className="hero-banner"
          style={{
            backgroundImage: `url(${activeMovie.image})`,
            transition: 'background-image 0.6s ease-in-out'
          }}
        >
          <div className="hero-overlay">
            <div className="hero-content" key={activeMovie.id}>
              <h1 className="hero-title">{activeMovie.title}</h1>
              <p className="hero-description">{activeMovie.description}</p>
              <div className="hero-btns">
                <Link to={`/details/${activeMovie.id}`} className="hero-btn play" style={{ textDecoration: 'none' }}>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M6 4l12 8-12 8V4z"></path></svg>
                  Play
                </Link>
                <Link to={`/details/${activeMovie.id}`} className="hero-btn info" style={{ textDecoration: 'none' }}>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                  More Info
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Genre Rows */}
      <div className="rows-container" style={{ marginTop: isSearching ? '80px' : '-150px', position: 'relative', zIndex: '20' }}>
        {isSearching && filteredMovies.length === 0 && (
          <div style={{ textAlign: 'center', padding: '50px', color: '#808080' }}>
            <h2>No results found for "{searchQuery}"</h2>
            <p>Try searching for a different title or genre.</p>
          </div>
        )}

        {genres.map((genre) => {
          const genreMovies = filteredMovies.filter(m => m.genre === genre);
          if (genreMovies.length === 0) return null;

          return (
            <div key={genre} className="genre-row">
              <h2 className="genre-title">{genre}</h2>
              <div className="movie-slider">
                {genreMovies.map((movie) => (
                  <Link
                    key={movie.id}
                    to={`/details/${movie.id}`}
                    className="movie-card-wrapper"
                    onMouseEnter={() => handleMouseEnter(movie)}
                  >
                    <img src={movie.image} alt={movie.title} className="movie-card" />
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
