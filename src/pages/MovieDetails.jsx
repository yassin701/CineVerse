import React from "react";
import { useParams } from "react-router-dom";
import movies from "../data/movies";
import { useNavigate } from "react-router-dom";


export default function MovieDetails() {
  const Navigate = useNavigate()
  const { id } = useParams();
  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) return <h2>Film introuvable</h2>;

  return (
  <>
    <div className="details-container">
      <div className="details-card">
        <img src={movie.image} alt={movie.title} className="details-image" />

        <div className="details-info">
          <h1>{movie.title}</h1>
          <p><b>Année :</b> {movie.year}</p>
          <p>{movie.description}</p>

          <h3>Équipe :</h3>
          <ul>
            <li><b>Director :</b> {movie.team.director}</li>
            <li><b>Actors :</b> {movie.team.actors.join(", ")}</li>
            <li><b>Producer :</b> {movie.team.producer}</li>
          </ul>
          <button onClick={()=>Navigate('/')} >Back To Home</button>
        </div>
      </div>
    </div>
    </>
 );
}
